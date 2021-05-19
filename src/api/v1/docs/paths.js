const customers = require('./customers');
const packages = require('./packages');
const reviews = require('./reviews');
const services = require('./services');
const users = require('./users');

module.exports = {
  paths: {
    ...customers,
    ...users,
    ...services,
    ...reviews,
    ...packages,
  },
};
