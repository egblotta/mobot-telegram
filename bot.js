const { Telegraf } = require('telegraf')
const omdb = new (require('omdbapi'))('51c3b968');
const axios = require('axios')

const bot = new Telegraf('1700786959:AAHm1tTr36O2UHFJfPxerPxbzx7KSkApwhg')

//ctx hace referencia a los datos que se reciben en el chat
bot.start((ctx) => bot.telegram.sendMessage(ctx.chat.id,`Hola ${ctx.from.first_name}, te gustaria que te recomiende una peli para ver hoy?` ))

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

bot.hears(['Accion', 'accion', 'ACCION'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Excelente eleccion, puedo recomendarte lo siguiente: ')
    const res = await axios.get('https://www.omdbapi.com/?t=avengers&apikey=51c3b968')
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
})

bot.hears(['Drama', 'drama', 'DRAMA'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Ideal para un dia como hoy , puedo recomendarte lo siguiente: ')

    //peticion asincrona
    const res = await axios.get('https://www.omdbapi.com/?t=joker&apikey=51c3b968')
    //console.log(res.data.Poster)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
})

bot.hears(['Thriller', 'thriller', 'THRILLER'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Ahh, eres de los mios, te gusta el miedo, puedo recomendarte lo siguiente: ')
    const res = await axios.get(`${res.data.Poster}, https://www.omdbapi.com/?t=it&apikey=51c3b968`)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
})

bot.hears(['Romance', 'romance', 'ROMANCE'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Veo que nos pusimos amorosos! Puedo recomendarte lo siguiente: ')
    const res = await axios.get(`${res.data.Poster}, http://www.omdbapi.com/?t=Me+after+you&y=2016&plot=full`)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
})

bot.hears(['no','no gracias'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Bueno, si me necesitas aca voy a estar.')
})


bot.launch()