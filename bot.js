const { Telegraf } = require('telegraf')

const bot = new Telegraf('1700786959:AAHm1tTr36O2UHFJfPxerPxbzx7KSkApwhg')

//ctx hace referencia a los datos que se reciben en el chat
bot.start((ctx) => bot.telegram.sendMessage(ctx.chat.id,`Hola ${ctx.from.first_name}, te gustaria que te recomiende una peli para ver hoy?` ))

// /help
bot.help((ctx) => ctx.reply('Send me a sticker'))

// /setings
bot.settings((ctx) => ctx.reply('Settings'))

//para escuchar cuando se tipea hi
bot.hears('hi', (ctx) => ctx.reply('Hey there'))        

//responde con el nombre cuando se tipea "hola"
bot.hears('hola', (ctx) => {
    //console.log(ctx.from)
    ctx.reply(`Hola ${ctx.from.first_name}, te gustaria que te recomiende una peli para ver hoy?`)
})

bot.hears(['si','si gracias', 'bueno', 'dale', 'bueno dale', 'ok'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Genial! que tipos de peli te gustan? Accion, Thriller, Drama...')
})

bot.hears(['Accion', 'accion', 'ACCION'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Excelente eleccion, puedo recomendarte lo siguiente: ')
})

bot.hears(['Drama', 'drama', 'DRAMA'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Ahh, eres alguien apasionado, puedo recomendarte lo siguiente: ')
})

bot.hears(['Thriller', 'thriller', 'THRILLER'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Ahh, eres como yo, te gusta el miedo, puedo recomendarte lo siguiente: ')
})

bot.hears(['no','no gracias'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Bueno, si me necesitas aca voy a estar.')
})

bot.launch()