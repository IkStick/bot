const TelegramApi = require('node-telegram-bot-api')

const {gameOptions, againOptions} = require('./options')

const token = '7322377476:AAHXJXKPciFEglKFNP46hSuMEFLR0hh1k6o'

const bot = new TelegramApi(token, {polling: true})

const chats = {}
const startGame = async (chatId) => {
    await bot.sendMessage(chatId, 'сейчас я загодаю цифру, от 1 до 9, а ты должен её отгадать!',)
    const randomNumber = Math.floor(Math.random() * 10)
    chats[chatId] = randomNumber
    await bot.sendMessage(chatId, 'Отгадывай', gameOptions)
}

const start = () => {
    bot.setMyCommands([
    {command: '/start', description: 'начальное приветсвие'},
    {command: '/info', description: 'информация о пользователе'},
    {command: '/game', description: 'интерактивная игра'},

])

bot.on('message',  async msg => {
    const text = msg.text
    const chatId = msg.chat.id

    if (text === '/start' ) {
        await bot.sendMessage(chatId,  'Добро пожаловать, в моего бота')
        return  bot.sendSticker(chatId, 'https://data.chpic.su/stickers/n/Nyusya822/Nyusya822_006.webp')
    }
    if (text === '/info') {
       return bot.sendMessage(chatId, `тебя зовут ${msg.from.first_name} ${msg.from.last_name}`)
    }
    if (text === '/game') {
        return startGame(chatId)
    }
    return bot.sendMessage(chatId, 'я тебя не понимаю, попробуй ещё раз)')
})
    bot.on('callback_query', async msg => {
       const data = msg.data
       const ChatId = msg.message.chat.id
        if(data === '/again') {
            return startGame(ChatId)
        }
        if( data === chats[ChatId]) {
            return  bot.sendMessage(ChatId, `ты отгадал цифру ${chats[ChatId]}`, againOptions)
        } else {
            return bot.sendMessage(ChatId, `Ты не угадал, бот загадал цифру ${chats[ChatId]}`, againOptions)
        }

    })
}

start()