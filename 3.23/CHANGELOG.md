# Задание 3.23. Редактирование страницы (галерея)

## Что сделано

В папке `sample` отредактирован **gallery.html** и создан **style.css**.

- Удалены теги `<center>`, `<font>`, оформление перенесено в CSS.
- Подключён **style.css**. Шапка и подвал: `display: flex`, `flex-direction: column`, `justify-content: center`, `align-items: center`; для подвала добавлено `text-align: center`. Навигация: `display: flex`, `justify-content: center`.
- Табличная вёрстка заменена на Flexbox: блок **.container** (width 80%, margin 0 auto, `display: flex`, `flex-direction: column`), внутри — заголовок h1 и по три блока: **.caption** (заголовок секции) и **.photos** (обёртка с `display: flex`, `flex-wrap: wrap`, `justify-content: space-between`). Каждое фото в **.photo** (width 24%, `display: flex`, выравнивание по центру и по низу). Изображения с `max-width: 100%`, подписи сохранены.
- Контент (три секции: Весенние, Летние, Осенние пейзажи по 8 фото) перенесён из таблицы в структуру .caption + .photos с .photo.
