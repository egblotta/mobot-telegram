
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN) 

export class CommandsController {
    
    // responde con el nombre cuando se tipea "hola"
    bot.hears('hola', (ctx) => {
        ctx.reply(`Hola ${ctx.from.first_name}, te gustaria que te recomiende una peli para ver hoy?`)
    })


}






// responde con el nombre cuando se tipea "hola"
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
    const res = await axios.get(endPoint+'joker&apikey='+key)
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
    const res = await axios.get(endPoint+'it&apikey='+key)
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
    const res = await axios.get(endPoint+'minions&apikey='+key)
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
