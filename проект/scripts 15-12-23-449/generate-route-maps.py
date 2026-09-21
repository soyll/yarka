#!/usr/bin/env python3
import json
import math
import sys
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = ROOT / "data" / "routes-coords.json"
OUT_DIR = ROOT / "assets" / "img" / "routes"

WIDTH = 700
HEIGHT = 400
TILE_SIZE = 256
TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
ROUTE_COLOR = "#1e6b3e"
MARKER_FILL = "#e88c30"
MARKER_TEXT = "#ffffff"
USER_AGENT = "green-walk-map-generator/1.0"


def latlon_to_global_pixel(lat, lon, zoom):
    n = 2 ** zoom
    x = (lon + 180) / 360 * n * TILE_SIZE
    lat_rad = math.radians(lat)
    y = (1 - math.log(math.tan(lat_rad) + 1 / math.cos(lat_rad)) / math.pi) / 2 * n * TILE_SIZE
    return x, y


def fetch_tile(z, x, y, cache):
    key = (z, x, y)
    if key in cache:
        return cache[key]
    url = TILE_URL.format(z=z, x=x, y=y)
    resp = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=30)
    resp.raise_for_status()
    img = Image.open(BytesIO(resp.content)).convert("RGB")
    cache[key] = img
    return img


def bbox_with_padding(points, pad_ratio=0.2):
    lats = [p["lat"] for p in points]
    lons = [p["lon"] for p in points]
    min_lat, max_lat = min(lats), max(lats)
    min_lon, max_lon = min(lons), max(lons)
    if len(points) == 1:
        min_lat -= 0.008
        max_lat += 0.008
        min_lon -= 0.012
        max_lon += 0.012
    else:
        lat_pad = (max_lat - min_lat) * pad_ratio or 0.005
        lon_pad = (max_lon - min_lon) * pad_ratio or 0.005
        min_lat -= lat_pad
        max_lat += lat_pad
        min_lon -= lon_pad
        max_lon += lon_pad
    return min_lat, max_lat, min_lon, max_lon


def pick_zoom(min_lat, max_lat, min_lon, max_lon):
    for zoom in range(17, 11, -1):
        x1, y1 = latlon_to_global_pixel(max_lat, min_lon, zoom)
        x2, y2 = latlon_to_global_pixel(min_lat, max_lon, zoom)
        w, h = abs(x2 - x1), abs(y2 - y1)
        if w <= WIDTH * 1.4 and h <= HEIGHT * 1.4 and w >= WIDTH * 0.35:
            return zoom
    return 13


def build_map_image(points):
    min_lat, max_lat, min_lon, max_lon = bbox_with_padding(points)
    zoom = pick_zoom(min_lat, max_lat, min_lon, max_lon)

    x_left, y_top = latlon_to_global_pixel(max_lat, min_lon, zoom)
    x_right, y_bottom = latlon_to_global_pixel(min_lat, max_lon, zoom)

    margin = 40
    crop_left = int(x_left) - margin
    crop_top = int(y_top) - margin
    crop_right = int(x_right) + margin
    crop_bottom = int(y_bottom) + margin

    tile_x_min = crop_left // TILE_SIZE
    tile_y_min = crop_top // TILE_SIZE
    tile_x_max = crop_right // TILE_SIZE
    tile_y_max = crop_bottom // TILE_SIZE

    cache = {}
    canvas_w = (tile_x_max - tile_x_min + 1) * TILE_SIZE
    canvas_h = (tile_y_max - tile_y_min + 1) * TILE_SIZE
    canvas = Image.new("RGB", (canvas_w, canvas_h))

    for tx in range(tile_x_min, tile_x_max + 1):
        for ty in range(tile_y_min, tile_y_max + 1):
            tile = fetch_tile(zoom, tx, ty, cache)
            px = (tx - tile_x_min) * TILE_SIZE
            py = (ty - tile_y_min) * TILE_SIZE
            canvas.paste(tile, (px, py))

    crop_box = (
        crop_left - tile_x_min * TILE_SIZE,
        crop_top - tile_y_min * TILE_SIZE,
        crop_right - tile_x_min * TILE_SIZE,
        crop_bottom - tile_y_min * TILE_SIZE,
    )
    cropped = canvas.crop(crop_box).resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

    draw = ImageDraw.Draw(cropped)
    pixel_points = []
    for p in points:
        gx, gy = latlon_to_global_pixel(p["lat"], p["lon"], zoom)
        px = (gx - crop_left) / (crop_right - crop_left) * WIDTH
        py = (gy - crop_top) / (crop_bottom - crop_top) * HEIGHT
        pixel_points.append((px, py))

    if len(pixel_points) > 1:
        draw.line(pixel_points, fill=ROUTE_COLOR, width=4, joint="curve")

    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 13)
    except OSError:
        font = ImageFont.load_default()

    r = 12
    for i, (px, py) in enumerate(pixel_points, start=1):
        draw.ellipse((px - r, py - r, px + r, py + r), fill=MARKER_FILL, outline="#ffffff", width=2)
        label = str(i)
        bbox = draw.textbbox((0, 0), label, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        draw.text((px - tw / 2, py - th / 2 - 1), label, fill=MARKER_TEXT, font=font)

    return cropped


def main():
    data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for route_id, route in data.items():
        points = route["points"]
        if not points:
            print(f"skip {route_id}: no points", file=sys.stderr)
            continue
        print(f"generating {route_id}...")
        img = build_map_image(points)
        out_path = OUT_DIR / f"{route_id}.png"
        img.save(out_path, "PNG")
        print(f"  -> {out_path}")


if __name__ == "__main__":
    main()
