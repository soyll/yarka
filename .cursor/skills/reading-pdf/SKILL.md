---
name: reading-pdf
description: Extracts text from PDF files using pdfplumber and uses it to answer questions or perform tasks. Use when the user attaches a PDF, provides a path to a PDF (in-project or absolute), or asks to work with PDF content, summaries, or document extraction.
---

# Чтение PDF

Когда пользователь даёт PDF (прикрепляет, путь в проекте или абсолютный), действуй так.

## 1. Извлечение текста

Бинарный PDF напрямую прочитать нельзя. Извлекай текст через **pdfplumber** (проверено, установлен):

```bash
python3 -c "
import sys
import pdfplumber
with pdfplumber.open(sys.argv[1]) as pdf:
    for p in pdf.pages:
        print(p.extract_text() or '')
" "ПУТЬ_К_ФАЙЛУ.pdf"
```

Вывод — весь текст в stdout; используй его для ответов и задач.

## 2. После извлечения

- Отвечай на вопросы по содержимому извлечённого текста.
- Если просят что-то по документу (резюме, выжимка, правки, поиск) — делай по этому тексту.
- Если извлечь не удалось (сканы, только картинки) — сообщи и предложи OCR или ручной ввод фрагментов.

## 3. Путь к файлу

- Прикреплённый файл — используй путь к нему (часто в workspace или во временной папке).
- Указан путь в проекте — используй как есть (от корня репозитория или абсолютный).
