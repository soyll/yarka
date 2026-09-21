# Стандарты «Зеленая Ставка»

Единые правила разметки, географии и копирайта для статического сайта.

## Районы и микрорайоны

**8 официальных районов** — единственный источник истины для фильтров, карты, `data-district`, select-опций:

| Slug | Название |
|------|----------|
| `akademichesky` | Академический |
| `verh-isetsky` | Верх-Исетский |
| `zheleznodorozhny` | Железнодорожный |
| `kirovsky` | Кировский |
| `leninsky` | Ленинский |
| `oktyabrsky` | Октябрьский |
| `ordzhonikidzevsky` | Орджоникидзевский |
| `chkalovsky` | Чкаловский |

**Микрорайоны** (ВИЗ, Уралмаш, Эльмаш, ЖБИ, Северка, Юго-Западный и т.д.) — не районы. Указываются только в тексте «О районе» или в карточках списков: `Район · микрорайон`.

Данные карты: `assets/js/map-data.js`.

## Именование файлов

- Паспорт района: `district-{slug}.html` (например `district-oktyabrsky.html`)
- Деталь инициативы: `initiative-{краткое-имя}.html`

## Типы страниц (5)

1. **Home** — `index.html`
2. **Список** — `initiatives.html`, `districts.html`, `report.html`
3. **Деталь инициативы** — `initiative-*.html`
4. **Паспорт района** — `district-*.html`
5. **Инфо** — `how.html`, `about.html`, `propose.html`

## Shell страницы

- `preconnect` к Google Fonts
- Title: `{Заголовок} — Зеленая Ставка` или `{Заголовок} | Зеленая Ставка`
- Header + mobile-nav идентичны на всех страницах
- `aria-current="page"` на активной ссылке nav

## Footer

- `footer--full` — главная, about (сетка ссылок)
- `footer--compact` — остальные страницы (одна строка `footer__bottom`)

## Карточка инициативы

```html
<a href="..." class="initiative-card" data-district="oktyabrsky" data-status="vote" data-votes="847" data-budget="230000">
  <span class="initiative-card__district">Октябрьский</span>
  <div class="initiative-card__top"><span class="badge badge--vote">Голосование</span></div>
  <h3 class="initiative-card__title">Название</h3>
  <p class="initiative-card__budget">230 000 ₽</p>
</a>
```

- Без `initiative-card__footer`
- `data-budget` — число без пробелов
- Бюджет в тексте: `230 000 ₽`

## Статусы (badge)

| Класс | Текст |
|-------|-------|
| `badge--vote` | Голосование |
| `badge--done` | Исполнено |
| `badge--wait` | Ждёт бюджета |
| `badge--reject` | Отклонено |

Не использовать: «Завершено», «Голосование открыто».

## Detail sidebar

Единая структура на страницах инициатив: badge → бюджет → note → progress → действие → ссылка на район.

Классы: `detail-sidebar`, `detail-sidebar--done` (для исполненных).

## CSS

Новый HTML **без `style=`**. Модификаторы:

- `budget-jar__fill--{50-90}` — высота копилки
- `budget-progress-fill--{50-100}` — ширина прогресса
- `footer--compact` / `footer--full`
- `container--narrow`, `section__title--spaced`, `link-primary`

## Копирайт

- Короткие фразы, конкретика, без пафоса
- Не выдумывать опросы, email, организации
- Числа — из `brief.md` или с пометкой «по данным управы»
- Парк Энгельса — **Октябрьский район**, не ВИЗ

## Чеклист перед правками

- [ ] 8 районов, корректные slug
- [ ] Статус из словаря (4 значения)
- [ ] Footer-вариант выбран
- [ ] Нет inline `style=`
- [ ] Breadcrumbs и `aria-current` корректны
