const express = require('express');

const services = require('./services');
const packages = require('./packages');
const users = require('./users');
const customers = require('./customers');
const reviews = require('./reviews');

const api = express.Router();

api.use('/services', services);
api.use('/packages', packages);
api.use('/users', users);
api.use('/customers', customers);
api.use('/reviews', reviews);

module.exports = api;
