const Sequelize = require('sequelize')
const ENV = require('../env')

const db = new Sequelize(ENV.database, ENV.username, ENV.password, {
    host: ENV.host,
    dialect: ENV.dialect
})

module.exports = db