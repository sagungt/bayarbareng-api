const Sequelize = require('sequelize');
const {
  database,
  username,
  password,
  host,
  dialect,
} = require('../env');

const db = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = db;
