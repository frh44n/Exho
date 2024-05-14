const TelegramBot = require('node-telegram-bot-api');

// Your bot API token
const botToken = '7142619678:AAFG3JtZhnYbLmNyxCttkeVh7EpOf-sQL_s';

// Create a new bot instance
const bot = new TelegramBot(botToken, { polling: true });

// Handle incoming messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Echo the received message back to the user
  await bot.sendMessage(chatId, messageText);
});

console.log('Bot started...');
