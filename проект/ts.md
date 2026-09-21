# Зеленая Ставка — Екатеринбург

> Правила разметки, географии и UI — в [STANDARDS.md](STANDARDS.md).

## О проекте

Платформа для голосования жителей Екатеринбурга за траты бюджета их района. Жители предлагают инициативы (лавки, освещение, ремонт подъездов), голосуют раз в месяц, видят отчет о тратах.

## Бриф

| Пункт | Значение |
|-------|----------|
| Название | Зеленая Ставка |
| Город | Екатеринбург |
| Миссия | Контроль жителей над бюджетом района |
| MVP | Вход по Госуслугам + лента инициатив + голосование + отчет |
| Метрика | 15 млн ₽ перераспределенных трат за год |

## ЦА для Екатеринбурга

**Урбанист (25-40)**
- Центр, Академический
- Телефон, быстрый доступ
- Хочет влиять за 30 секунд

**Хозяйка района (45-60)**
- Уралмаш, Эльмаш (Орджоникидзевский); ЖБИ (Кировский); Химмаш (Чкаловский)
- Ноутбук, Госуслуги через библиотеку
- Хочет видеть результат

**Родитель с коляской (28-38)**
- Академический, Солнечный, Широкая Речка
- Только смартфон
- Хочет пуш-уведомления и 10 секунд на голос

## Палитра

| HEX | Назначение |
|-----|-------------|
| #1E6B3E | Уральский изумруд — кнопки, активные статусы |
| #E88C30 | Медный закат — акценты, предложить идею |
| #C84C4C | Красная линия — отклонено, жалобы |
| #F5F7FA | Фон страниц |
| #FFFFFF | Карточки |
| #1A2A3A | Заголовки |
| #6B7B8D | Второстепенный текст |
| #DCE3EC | Границы |

## Скругления
4px — бейджики, мелкое
8px — карточки, инпуты
12px — модалки
20px — главная кнопка
9999px — аватарки, прогресс

text

## CSS переменные (скопируй полностью)

```css
:root {
  --color-primary: #1E6B3E;
  --color-primary-hover: #15522F;
  --color-secondary: #E88C30;
  --color-secondary-hover: #D47A1E;
  --color-danger: #C84C4C;
  --color-success: #2E8B57;
  
  --color-bg-page: #F5F7FA;
  --color-bg-card: #FFFFFF;
  --color-bg-highlight: #E8F3EC;
  
  --color-text-main: #1A2A3A;
  --color-text-muted: #6B7B8D;
  --color-text-hint: #9AABBF;
  --color-text-inverse: #FFFFFF;
  
  --color-border: #DCE3EC;
  --color-border-focus: #1E6B3E;
  
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --radius-full: 9999px;
  
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.03);
  --shadow-md: 0 4px 10px rgba(0,0,0,0.04);
  --shadow-lg: 0 12px 24px rgba(0,0,0,0.06);
  --shadow-focus: 0 0 0 3px rgba(30,107,62,0.2);
  
  --font-family: 'Inter', -apple-system, system-ui, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --transition-fast: 0.12s ease;
  --transition-base: 0.2s ease;
  
  --z-modal: 100;
}
Компоненты
Карточка инициативы

css
.initiative-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.initiative-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: transparent;
}
Кнопка голосования

css
.btn-vote {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-xl);
  padding: 12px var(--space-lg);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-vote:hover {
  background: var(--color-primary-hover);
  transform: scale(0.97);
}
Прогресс бюджета

css
.budget-progress {
  background: var(--color-border);
  border-radius: var(--radius-full);
  height: 8px;
  overflow: hidden;
}

.budget-progress-fill {
  background: var(--color-primary);
  border-radius: var(--radius-full);
  height: 100%;
  transition: width var(--transition-base);
}
Выбор района

css
.district-selector {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.district-option {
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  cursor: pointer;
  background: transparent;
}

.district-option.active {
  background: var(--color-primary);
  color: white;
}
Районы Екатеринбурга (8 официальных)

| Slug | Район | Микрорайоны (в тексте, не в фильтрах) |
|------|-------|--------------------------------------|
| `akademichesky` | Академический | Солнечный, Широкая Речка |
| `verh-isetsky` | Верх-Исетский | ВИЗ, Юго-Западный |
| `zheleznodorozhny` | Железнодорожный | Северка |
| `kirovsky` | Кировский | ЖБИ, Комсомольский |
| `leninsky` | Ленинский | — |
| `oktyabrsky` | Октябрьский | — |
| `ordzhonikidzevsky` | Орджоникидзевский | Уралмаш, Эльмаш |
| `chkalovsky` | Чкаловский | Ботаника, Химмаш, Уктус |

Hero текст
10 минут в месяц — и ваш район меняется

Голосуйте за скамейки, освещение, ремонт подъездов и детских площадок. Деньги управы — под вашим контролем.

[Выбрать район] [Смотреть инициативы]

Примеры инициатив
Район	Инициатива	Бюджет	Статус
Октябрьский	Освещение в парке Энгельса	230 000 ₽	Голосование
Орджоникидзевский	Лавки у ДК Орджоникидзе	90 000 ₽	Исполнено
Ленинский	Сквер у цирка	500 000 ₽	Ждёт бюджета
HTML скелет
html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Зеленая Ставка — Екатеринбург</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* сюда переменные и компоненты */
  </style>
</head>
<body>
  <div class="app">
    <!-- главная страница -->
  </div>
</body>
</html>
text

---

**Готово.** Этот файл:
- Не сломается (нет вложенных кодовых блоков друг в друга)
- Чисто читается
- Можно копировать целиком в Cursor
- Все переменные рабочие

Что дальше делать с этим файлом?
