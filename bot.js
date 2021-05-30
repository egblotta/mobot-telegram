const { Telegraf } = require('telegraf')
const omdb = new (require('omdbapi'))('51c3b968');
const axios = require('axios')

const bot = new Telegraf('1700786959:AAHm1tTr36O2UHFJfPxerPxbzx7KSkApwhg')

//ctx hace referencia a los datos que se reciben en el chat
bot.start((ctx) => bot.telegram.sendMessage(ctx.chat.id,`Hola ${ctx.from.first_name}, mi nombre es MoBot\nTe gustaria que te recomiende una peli para ver hoy?` ))

// /setings
bot.settings((ctx) => ctx.reply('Settings'))

//para escuchar cuando se tipea hi
bot.hears('hi', (ctx) => ctx.reply('Hey there'))        

//responde con el nombre cuando se tipea "hola"
bot.hears('hola', (ctx) => {
    //console.log(ctx.from)
    ctx.reply(`Hola ${ctx.from.first_name}!, ¿Te gustaria que te recomiende una peli para ver hoy?`)
})

bot.hears(['si','si gracias','bueno','dale','bueno dale','ok','obvio','Si','Si gracias','Bueno','Dale','Bueno dale','Ok','Obvio'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Genial! que tipos de peli te gustan? Accion, Thriller, Drama...')
})

bot.hears(['Accion', 'accion', 'ACCION'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Excelente eleccion, te puedo recomendar algunas: ')
    const res = await axios.get("https://www.omdbapi.com/?t=inglourious+basterds&apikey=51c3b968")
    //console.log(res.data.Poster)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
})

bot.hears(['Drama', 'drama', 'DRAMA'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Ideal para un dia como hoy , puedo recomendarte lo siguiente: ')

    //peticion asincrona
    const res = await axios.get('https://www.omdbapi.com/?t=gladiator&apikey=51c3b968')
    //console.log(res.data.Poster)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)    
})

bot.hears(['Thriller', 'thriller', 'THRILLER'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Ahh, eres de los mios, te gusta el miedo, puedo recomendarte lo siguiente: ')
    const res = await axios.get("https://www.omdbapi.com/?t=the+devil's+advocate&apikey=51c3b968")
    //console.log(res.data.Poster)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
 
})

bot.hears(['Comedia', 'comedia', 'COMEDIA'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Estas son ideales para disfrutar con la familia o entre amigos, puedo recomendarte lo siguiente: ')
    //peticion asincrona
    const res = await axios.get('http://www.omdbapi.com/?t=pink-panther&apikey=51c3b968')
    //console.log(res.data.Poster)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)
})

bot.hears(['Animacion', 'animacion', 'ANIMACION', 'Dibujitos','dibujitos','DIBUJITOS'], async (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Genial! Son buenísimas para recordar épocas más lindas\nTe recomiendo estas:')

    //peticion asincrona
    const res = await axios.get('https://www.omdbapi.com/?t=klaus&apikey=51c3b968')
    //console.log(res.data.Poster)
    bot.telegram.sendMessage(ctx.chat.id, res.data.Poster)    
})

bot.hears(['no','no gracias'], (ctx) => {
    //console.log(ctx.from)
    ctx.reply('Bueno, si me necesitas aca voy a estar.')
})


bot.launch()