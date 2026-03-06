# Задание 3.24. Верстка по макету (История)

## Что сделано

В папке `sample` создан **style.css** и обновлён **history.html**.

- Оформление шапки, навигации и подвала совпадает с заданием 3.23 (Flexbox: header и footer — flex column, center; nav — flex, justify-content center). Удалены теги `<center>` и `<font>`, подключён style.css.
- Контент переверстан на Flexbox по образцу history.png: блок **.container** (width 80%, flex column) с заголовком h1 и вложенным **.history-row** (flex row с gap). В строке: **.history-images** (колонка из 6 изображений, flex column) и **.history-text** (текст с выравниванием по ширине). Изображения с фиксированной шириной 200px, текст в одном столбце справа.
