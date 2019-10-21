require('dotenv').config()

const telegramBot = require('node-telegram-bot-api');
const scraper = require('open-graph-scraper');
const firebase = require('firebase');

const token = process.env.TELEGRAM_TOKEN;
const bot = new telegramBot(token, {polling: true});

//  Send testing message
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, "I'm working, how can I help you");
});

