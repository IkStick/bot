const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'telegrambot',
    'telega',
    'yt[eqdfvnenltkfnm',
    {
        host: '212.113.100.246',
        port: '5432',
        dialect: 'postgres'
    }
)