#!/usr/bin/env python3
"""Generate filled project brief PDF with table layout matching brief-template.pdf."""

from pathlib import Path

from fpdf import FPDF
from fpdf.enums import Align, TableCellFillMode, VAlign, WrapMode
from fpdf.fonts import FontFace

FONT = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "бриф.pdf"

HEADER_FILL = (96, 135, 211)
LABEL_WIDTH = 0.42
VALUE_WIDTH = 0.58
FONT_SIZE = 8
LINE_H = 4.0


def nav_menu() -> str:
    return (
        "главная, маршрут дня и популярные\n"
        "маршруты, каталог и фильтр по возрасту\n"
        "районы, ссылки на каталог\n"
        "о проекте"
    )


def features_list() -> str:
    return (
        "нужно: каталог, фильтр по возрасту, страница маршрута, "
        "маршрут дня, популярные\n"
        "не нужно: карта, регистрация, формы"
    )


class BriefPDF(FPDF):
    def __init__(self):
        super().__init__()
        self.add_font("Brief", "", FONT)
        self.add_font("Brief", "B", FONT)
        self.set_auto_page_break(auto=True, margin=14)
        self.set_margins(14, 14, 14)
        self._header_style = FontFace(
            family="Brief",
            emphasis="BOLD",
            fill_color=HEADER_FILL,
            color=(255, 255, 255),
            size_pt=FONT_SIZE,
        )
        self._label_style = FontFace(family="Brief", emphasis="BOLD", size_pt=FONT_SIZE)
        self._value_style = FontFace(family="Brief", size_pt=FONT_SIZE)

    def page_title(self):
        self.set_font("Brief", "B", 14)
        self.cell(0, 8, "Бриф на разработку сайта", new_x="LMARGIN", new_y="NEXT")
        self.set_font("Brief", "B", 11)
        self.cell(0, 7, "Информация о проекте", new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def table_block(self, rows: list):
        with self.table(
            width=self.epw,
            col_widths=(LABEL_WIDTH, VALUE_WIDTH),
            line_height=LINE_H,
            text_align=Align.L,
            v_align=VAlign.T,
            wrapmode=WrapMode.WORD,
            cell_fill_mode=TableCellFillMode.ROWS,
        ) as table:
            for row in rows:
                kind = row[0]
                r = table.row()
                if kind == "header":
                    r.cell(row[1], colspan=2, style=self._header_style)
                elif kind == "field":
                    r.cell(row[1], style=self._label_style)
                    r.cell(row[2], style=self._value_style)
                elif kind == "field2":
                    r.cell(row[1], style=self._label_style)
                    r.cell(row[2], style=self._value_style)


def page1_rows() -> list:
    return [
        ("header", "1. Общая информация"),
        (
            "field",
            "Название компании и доменное имя web-сайта (если есть):",
            "Зеленая прогулка, домен green-walk.ru",
        ),
        (
            "field",
            "Какова область деятельности и специфика бизнеса вашей компании:",
            "Пешие маршруты по Екатеринбургу, парки и места, прогулки под разный возраст",
        ),
        (
            "field",
            "Контактная информация (ФИО, должность, электронная почта, рабочий и мобильный телефоны):",
            "offer@green-walk.ru, Екатеринбург, ул. Щербакова, 14, тел. 679-22-85",
        ),
        (
            "field",
            "Планируемые сроки проекта:",
            "2 недели на вёрстку",
        ),
        ("header", "2. Информация о товаре/услуге:"),
        (
            "field",
            "Опишите бренд/продукт/услугу, для которой создается сайт:",
            "Сайт с готовыми маршрутами: время, дистанция, точки по порядку. "
            "На главной маршрут дня и популярные",
        ),
        (
            "field",
            "Целевая аудитория:",
            "Подростки с телефона. Взрослые, центр и парки. "
            "Пожилые, спокойный темп и коротко",
        ),
        (
            "field",
            "Ценовая категория:",
            "Бесплатно",
        ),
        (
            "field",
            "География представленности:",
            "Екатеринбург, 8 районов",
        ),
        (
            "field",
            "Основные конкуренты. Оцените работу их web-сайтов (работу в интернете в целом), "
            "отметьте положительные и отрицательные стороны.",
            "Сайт мэрии и Красная линия, маршруты разбросаны. "
            "Навигаторы дают точки, но не дают готовую прогулку по возрасту",
        ),
        (
            "field",
            "Уникальные преимущества бренда/продукта/услуги:",
            "Маршруты по возрасту, всё на одной странице, нормально с телефона",
        ),
        ("header", "3. Постановка задачи"),
        (
            "field",
            "Что нужно сделать? Какая задача стоит перед нами?",
            "Сверстать на HTML и CSS, чтобы на телефоне и компе смотрелось нормально",
        ),
        (
            "field",
            "Какие маркетинговые и имиджевые цели стоят перед проектом?",
            "Показать что в городе можно гулять, быстро выбрать маршрут",
        ),
        (
            "field",
            "Критерии успешности реализации проекта?",
            "За 2 недели. Понятно с первого экрана. Маршрут в два клика",
        ),
        (
            "field",
            "Планируемый бюджет проекта:",
            "Сначала недорого, потом доработки",
        ),
        ("header", "4. Содержание проекта"),
        (
            "field2",
            "Разделы и подразделы:",
            "Функциональные возможности сайта:",
        ),
    ]


def page2_rows() -> list:
    return [
        (
            "field2",
            "Перечислите основные пункты навигационного меню сайта:\n" + nav_menu(),
            features_list(),
        ),
        (
            "field",
            "Укажите языковые версии сайта:",
            "Русский",
        ),
        (
            "field",
            "Требуется ли организация взаимодействия со сторонними сайтами, "
            "или программами (1С, интранет-системы, прочее)?",
            "Нет",
        ),
        (
            "field",
            "Будут ли предоставлены информационные материалы для сайта, или потребуется "
            "их подготовка на нашей стороне? Оцените текущую степень готовности информации:",
            "Тексты дадим сами, примерно 80 процентов готово",
        ),
        (
            "field",
            "Требуется ли мобильная версия сайта или адаптация под мобильные устройства "
            "(адаптивный дизайн и верстка)?",
            "Да",
        ),
        ("header", "Регистрация и данные"),
        (
            "field",
            "Требуется ли регистрация пользователей на сайте?",
            "Нет",
        ),
        (
            "field",
            "Какие данные собираем в формах:",
            "Нет",
        ),
    ]


def page3_rows() -> list:
    return [
        ("header", "Дизайн разрабатываемого проекта"),
        (
            "field",
            "Существует ли у компании фирменный стиль, логотип, рекламные материалы?",
            "Да, зелёный и оранжевый, логотип есть",
        ),
        (
            "field",
            "Укажите примеры сайтов, которые вам нравятся (независимо от их направленности "
            "и тематики). Укажите, что именно в них нравится?",
            "Туристические сайты и Красная линия, видно время и расстояние, мало лишнего",
        ),
        (
            "field",
            "Охарактеризуйте будущий проект (например, современный, удобный). "
            "Укажите, каким он не должен быть.",
            "Простой и спокойный, не как старый гос сайт",
        ),
        (
            "field",
            "Какое впечатление должен производить будущий проект на вашу ЦА?",
            "Можно пойти гулять сегодня, маршрут уже есть",
        ),
        ("header", "Поддержка сайта"),
        (
            "field",
            "Какими способами осуществляется техническая поддержка существующего сайта "
            "(если есть) (самостоятельно/с помощью подрядчика)?",
            "Нет",
        ),
        (
            "field",
            "Требуется ли дальнейшая поддержка со стороны разработчика?",
            "Да, после запуска",
        ),
        (
            "field",
            "Кто в компании будет заниматься поддержкой сайта?",
            "Наймём человека на контент и маршруты",
        ),
    ]


def build() -> BriefPDF:
    pdf = BriefPDF()
    pdf.add_page()
    pdf.page_title()
    pdf.table_block(page1_rows())
    pdf.add_page()
    pdf.table_block(page2_rows())
    pdf.add_page()
    pdf.table_block(page3_rows())
    return pdf


if __name__ == "__main__":
    pdf = build()
    pdf.output(str(OUT))
    print(f"Written: {OUT}")
