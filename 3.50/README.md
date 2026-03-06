# Задание 3.50. Галерея и настройка субтитров

## 3.50 Галерея

В папке **3.50 Галерея** реализована галерея-«гармошка» на Flexbox.

- **index.html:** контейнер .container (90%, по центру), заголовок, блок .gallery__flex с шестью .gallery__item; в каждом — img с picsum.photos (1920/1080 … 1920/1085).
- **style.css:** .gallery__flex — height: 600px, display: flex (горизонтальная ось по умолчанию); .gallery__item — flex: 1; .gallery__item:hover — flex: 16; изображения — width/height 100%, object-fit: cover, display: block. Гармошка горизонтальная за счёт flex-direction: row (значение по умолчанию).

## 3.50 Настройка субтитров

В папке **3.50 Настройка субтитров/sample** изучен пример с видео и WebVTT-титрами.

- В **index.html** подключён track (srclang="ru", src="media/sample.vtt", default). Стили субтитров заданы псевдоэлементом **::cue** у video: в примере — font-style: italic, color: red. Для ::cue допустимы свойства: background и производные, color, font и производные, line-height, opacity, outline, text-decoration, text-shadow, visibility, white-space. Настройка своих параметров (размер шрифта, цвет, тень) выполняется в блоке style по селектору video::cue.
