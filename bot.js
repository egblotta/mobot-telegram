const { Telegraf } = require('telegraf')

const bot = new Telegraf('1700786959:AAHm1tTr36O2UHFJfPxerPxbzx7KSkApwhg')

//ctx hace referencia a los datos que se reciben en el chat
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.settings((ctx) => ctx.reply('Settings'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()