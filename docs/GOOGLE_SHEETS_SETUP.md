# Подключение Google Sheets

Важно: `doPost(e)` нельзя проверять кнопкой `Run` в Apps Script. При ручном запуске Google не передает объект `e`, поэтому появляется ошибка `Cannot read properties of undefined (reading 'postData')`.

Для ручной проверки используйте функцию `testDoPost()`. Для реальной формы используйте Web App URL после деплоя.

## Код Apps Script

1. Создайте Google Sheet.
2. Откройте `Extensions` -> `Apps Script`.
3. Вставьте код:

```js
const SHEET_NAME = 'Leads';

function doPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return jsonResponse({
      ok: false,
      error: 'No POST data. Use the Web App URL or run testDoPost().',
    });
  }

  const data = JSON.parse(e.postData.contents);
  saveLead(data);

  return jsonResponse({ ok: true });
}

function testDoPost() {
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Тест',
        phone: '+7 700 000 00 00',
        businessType: 'Салон красоты',
        message: 'Проверка записи в Google Sheets',
        page: 'manual-test',
        source: 'apps-script-test',
      }),
    },
  };

  return doPost(testEvent);
}

function saveLead(data) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet =
    spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Дата',
      'Имя',
      'Телефон',
      'Тип бизнеса',
      'Сообщение',
      'Страница',
      'Источник',
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.businessType || '',
    data.message || '',
    data.page || '',
    data.source || '',
  ]);
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Деплой

1. Нажмите `Deploy` -> `New deployment`.
2. Выберите тип `Web app`.
3. `Execute as`: `Me`.
4. `Who has access`: `Anyone`.
5. Нажмите `Deploy`.
6. Скопируйте Web App URL. Он должен выглядеть примерно так:

```bash
https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

## Подключение к сайту

Создайте файл `.env` в корне проекта:

```bash
VITE_LEAD_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

Перезапустите dev server:

```bash
npm run dev
```

Для Vercel добавьте `VITE_LEAD_WEBHOOK_URL` в `Environment Variables` и сделайте redeploy.
