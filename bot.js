require('dotenv').config()

const { Telegraf } = require('telegraf')
const axios = require('axios')
const bot = new Telegraf(process.env.BOT_TOKEN) 
const key = process.env.OMDBAPI_KEY;
const endPoint = 'https://www.omdbapi.com/?t='

//ctx hace referencia a los datos que se reciben en el chat

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id,`Hola ${ctx.from.first_name}, mi nombre es MoBot\nTe gustaria que te recomiende una peli para ver hoy?` )
})

// /setings
bot.settings((ctx) => ctx.reply('Settings'))

//responde con el nombre cuando se tipea "hola"
bot.hears('hola', (ctx) => {
    ctx.reply(`Hola ${ctx.from.first_name}, te gustaria que te recomiende una peli para ver hoy?`)
})

bot.hears(['si','si gracias', 'bueno', 'dale', 'bueno dale', 'ok'], (ctx) => {
    ctx.reply('Genial! que tipos de peli te gustan? Accion, Thriller, Drama, Romance, Comedia')
})

bot.hears(['Accion', 'accion', 'ACCION'], async (ctx) => {
    ctx.reply('Excelente eleccion, puedo recomendarte lo siguiente: ')
    const res = await axios.get(endPoint+'avengers&apikey='+key)
    try {
        bot.telegram.sendMessage(ctx.chat.id, res.data.Poster+
            '\nDirigida por: '+res.data.Director+
            '\nAño de estreno: '+res.data.Year+
            '\nActores: '+res.data.Actors+
            '\nRating de imdb: '+res.data.imdbRating+
            '\nDescripción: '+res.data.Plot	
            )
    } catch (error) {
        console.error(error.message)
        bot.telegram.sendMessage(ctx.chat.id, error.message)
    } 
})

bot.hears(['Drama', 'drama', 'DRAMA'], async (ctx) => {
    
    ctx.reply('Ideal para un dia como hoy, puedo recomendarte lo siguiente: ')
    const res = await axios.get(endPoint+'the+judge&apikey='+key)
    try {
        bot.telegram.sendMessage(ctx.chat.id, res.data.Poster+
            '\nDirigida por: '+res.data.Director+
            '\nAño de estreno: '+res.data.Year+
            '\nActores: '+res.data.Actors+
            '\nRating de imdb: '+res.data.imdbRating+
            '\nDescripción: '+res.data.Plot	
            )
    } catch (error) {
        console.error(error.message)
        bot.telegram.sendMessage(ctx.chat.id, error.message)
    }    
})

bot.hears(['Thriller', 'thriller', 'THRILLER'], async (ctx) => {
    
    ctx.reply('Ahh, eres de los mios, te gusta el miedo, puedo recomendarte lo siguiente: ')
    const res = await axios.get(endPoint+"devil's&apikey="+key)
    try {
        bot.telegram.sendMessage(ctx.chat.id, res.data.Poster+
            '\nDirigida por: '+res.data.Director+
            '\nAño de estreno: '+res.data.Year+
            '\nActores: '+res.data.Actors+
            '\nRating de imdb: '+res.data.imdbRating+
            '\nDescripción: '+res.data.Plot	
            )
    } catch (error) {
        console.error(error.message)
        bot.telegram.sendMessage(ctx.chat.id, error.message)
    } 
})

bot.hears(['Romance', 'romance', 'ROMANCE'], async (ctx) => {    
    ctx.reply('Veo que nos pusimos amorosos! Puedo recomendarte lo siguiente: ')
    const res = await axios.get(endPoint+'50&apikey='+key)
    try {
        bot.telegram.sendMessage(ctx.chat.id, res.data.Poster+
            '\nDirigida por: '+res.data.Director+
            '\nAño de estreno: '+res.data.Year+
            '\nActores: '+res.data.Actors+
            '\nRating de imdb: '+res.data.imdbRating+
            '\nDescripción: '+res.data.Plot	
            )
    } catch (error) {
        console.error(error.message)
        bot.telegram.sendMessage(ctx.chat.id, error.message)
    } 
})

bot.hears(['Comedia', 'comedia', 'COMEDIA'], async (ctx) => {
    ctx.reply('Para disfrutar con la familia o entre amigos, puedo recomendarte lo siguiente: ')
    const res = await axios.get(endPoint+'white+chicks&apikey='+key)
    try {
        bot.telegram.sendMessage(ctx.chat.id, res.data.Poster+
            '\nDirigida por: '+res.data.Director+
            '\nAño de estreno: '+res.data.Year+
            '\nActores: '+res.data.Actors+
            '\nRating de imdb: '+res.data.imdbRating+
            '\nDescripción: '+res.data.Plot	
            )
    } catch (error) {
        console.error(error.message)
        bot.telegram.sendMessage(ctx.chat.id, error.message)
    } 
})

bot.hears(['Animacion', 'animacion', 'ANIMACION', 'Dibujitos','dibujitos','DIBUJITOS'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Genial! Son buenísimas para recordar épocas más lindas\nTe recomiendo estas:')
    const res = await axios.get(endPoint+'klaus&apikey='+key)
    try {
        bot.telegram.sendMessage(ctx.chat.id, res.data.Poster+
            '\nDirigida por: '+res.data.Director+
            '\nAño de estreno: '+res.data.Year+
            '\nActores: '+res.data.Actors+
            '\nRating de imdb: '+res.data.imdbRating+
            '\nDescripción: '+res.data.Plot	
            )
    } catch (error) {
        console.error(error.message)
        bot.telegram.sendMessage(ctx.chat.id, error.message)
    }
})

bot.hears(['no','no gracias'], (ctx) => {
    ctx.reply('Bueno, si me necesitas aca voy a estar.')
})

bot.launch()
