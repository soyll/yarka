# Задание 3.54. Формы и псевдоклассы

## Что сделано

В папке `sample` создан **style.css** и обновлён **index.html** (кнопки переведены на type="reset" и type="submit").

- **Шрифт:** body и форма — **font-family: Arial, Helvetica, sans-serif**.
- **textarea** — **resize: vertical** (изменение размера только по вертикали).
- Все нужные поля помечены атрибутом **required**.
- **:focus** — нижняя граница утолщается (border-bottom: 3px).
- **:invalid** (при фокусе и непустом значении) — нижняя граница красная (input:focus:invalid, textarea:invalid:not(:placeholder-shown)).
- Сообщения об ошибках: блоки **.error** по умолчанию скрыты (display: none); показ через комбинатор **+** для соседа после поля: **input[type="email"]:invalid:not(:placeholder-shown) + .error** и **textarea:invalid:not(:placeholder-shown) + .error**.
- Кнопки «Очистить» и «Отправить» — при **:hover** инверсия цветов (фон и текст меняются местами).
