# Уведомления в Telegram о новых заявках

Telegram-уведомление лучше отправлять из Google Apps Script, а не из React. Так bot token не попадет в браузер и GitHub.

Важно: бот Telegram обычно не может отправить личное сообщение просто на `@eeermekov`. Для личных сообщений нужен numeric `chat_id`. Пользователь должен сначала нажать `Start` в боте.

## 1. Создайте Telegram-бота

1. Откройте Telegram.
2. Напишите `@BotFather`.
3. Выполните `/newbot`.
4. Скопируйте bot token.

Token выглядит примерно так:

```txt
1234567890:AA_example_token
```

Не добавляйте этот token в React, Vercel env для frontend или GitHub.

## 2. Получите chat_id

1. Откройте созданного бота в Telegram.
2. Нажмите `Start`.
3. Откройте в браузере:

```txt
https://api.telegram.org/botBOT_TOKEN/getUpdates
```

Замените `BOT_TOKEN` на token от BotFather.

4. В ответе найдите:

```json
"chat":{"id":123456789}
```

Это число и есть `TELEGRAM_CHAT_ID`.

## 3. Добавьте Telegram в Apps Script

В начало Google Apps Script добавьте:

```js
const TELEGRAM_BOT_TOKEN = 'PASTE_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'PASTE_CHAT_ID_HERE';
```

В функции `doPost(e)` после `saveLead(data);` добавьте:

```js
sendTelegramNotification(data);
```

И добавьте эту функцию ниже:

```js
function sendTelegramNotification(data) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return;
  }

  const text = [
    'Новая заявка с сайта',
    '',
    `Имя: ${data.name || '-'}`,
    `Телефон: ${data.phone || '-'}`,
    `Бизнес: ${data.businessType || '-'}`,
    `Сообщение: ${data.message || '-'}`,
    '',
    `Страница: ${data.page || '-'}`,
    `Источник: ${data.source || '-'}`,
  ].join('\n');

  UrlFetchApp.fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      disable_web_page_preview: true,
    }),
    muteHttpExceptions: true,
  });
}
```

## 4. Обновите deployment

После изменения Apps Script:

1. `Deploy` -> `Manage deployments`.
2. Выберите текущий Web App.
3. Нажмите edit.
4. В `Version` выберите `New version`.
5. Нажмите `Deploy`.

После этого каждая новая заявка будет записываться в Google Sheets и приходить в Telegram.
