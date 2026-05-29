# Задание 3.16. Display: table

## Что сделано

В папке `sample`:

- В **index.html** подключён **style/style.css**, в блок `aside` добавлено изображение **img/image.jpg**.
- В **style/style.css** верстка переведена на табличную модель без float:
  - **.container** — `display: table`, ширина 90%.
  - **header** — `display: table-caption` (отображается как подпись таблицы сверху).
  - **section**, **aside** — без float и width; **section** с `display: table-cell` (и aside как вторая ячейка по умолчанию в таблице).
  - **footer** — `clear: both`.
  - Для изображения в aside заданы `max-width: 100%`, `height: auto`.

Ячейки таблицы подстраивают ширину под содержимое; контент отображается в две колонки (секция и сайдбар) без явных процентов.
