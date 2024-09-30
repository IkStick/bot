module.exports  = {
    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Цифра 1', callback_data: '1'}, {text: 'Цифра 2', callback_data: '2'}, {
                    text: 'Цифра 3',
                    callback_data: '3'
                }],


                [{text: 'Цифра 4', callback_data: '4'}, {text: 'Цифра 5', callback_data: '5'}, {
                    text: 'Цифра 6',
                    callback_data: '6'
                }],


                [{text: 'Цифра 7', callback_data: '7'}, {text: 'Цифра 8', callback_data: '8'}, {
                    text: 'Цифра 9',
                    callback_data: '9'
                }],

                [{text: 'Цифра 0', callback_data: '0'}],
            ]
        })
    },

        againOptions:  {
        reply_markup: JSON.stringify({
        inline_keyboard: [
        [{text: 'играть ещё раз', callback_data: '/again'}]
        ]
        })
}
}