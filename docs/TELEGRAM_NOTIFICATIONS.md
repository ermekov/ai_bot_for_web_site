# Уведомления в Telegram о новых заявках

Telegram-уведомление лучше отправлять из Google Apps Script, а не из React. Так bot token не попадет в браузер, GitHub или frontend bundle.

## Что нужно

- `TELEGRAM_BOT_TOKEN` от BotFather.
- `TELEGRAM_CHAT_ID` получателя. Для личных сообщений пользователь должен сначала нажать `Start` в боте.

Не добавляйте token в React, GitHub, Vercel frontend env или публичные файлы.

## 1. Сохраните token и chat_id в Script Properties

В Apps Script откройте `Project Settings` -> `Script Properties` и добавьте:

```txt
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## 2. Обновите Apps Script

В функции `doPost(e)` после строки:

```js
saveLead(data);
```

добавьте:

```js
sendTelegramNotification(data);
```

Затем добавьте эти функции ниже:

```js
function sendTelegramNotification(data) {
  const properties = PropertiesService.getScriptProperties();
  const botToken = properties.getProperty('TELEGRAM_BOT_TOKEN');
  const chatId = properties.getProperty('TELEGRAM_CHAT_ID');

  if (!botToken || !chatId) {
    throw new Error('Telegram token or chat_id is not configured');
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

  const response = UrlFetchApp.fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
    muteHttpExceptions: true,
  });

  const statusCode = response.getResponseCode();
  if (statusCode < 200 || statusCode >= 300) {
    throw new Error(`Telegram notification failed: ${response.getContentText()}`);
  }
}

function testTelegramNotification() {
  sendTelegramNotification({
    name: 'Тест',
    phone: '+7 700 000 00 00',
    businessType: 'Проверка',
    message: 'Проверка Telegram-уведомления',
    page: 'manual-test',
    source: 'apps-script-test',
  });
}
```

## 3. Обновите deployment

После изменения Apps Script:

1. `Deploy` -> `Manage deployments`.
2. Выберите текущий Web App.
3. Нажмите edit.
4. В `Version` выберите `New version`.
5. Нажмите `Deploy`.

После этого каждая новая заявка будет записываться в Google Sheets и приходить в Telegram.
