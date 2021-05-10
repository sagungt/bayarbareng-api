module.exports = {
  database: 'DB_NAME',
  username: 'DB_USERNAME',
  password: 'DB_PASSWORD!',
  host: 'DB_HOST',
  dialect: 'DB',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  serverPort: 8000,
};
