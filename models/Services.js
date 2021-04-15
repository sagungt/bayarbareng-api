const Sequelize = require('sequelize')
const db = require('../config/database')

const { DataTypes } = Sequelize

const Services = db.define('services', {
    name: {
        type: DataTypes.STRING
    }
}, {
    // freezeTableName: true
    timestamps: false
})

module.exports = Services