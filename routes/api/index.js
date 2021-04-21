const express = require('express');

const Services = require('../../controllers/Services');

const api = express.Router();

api.get('/services', Services.getServices);

module.exports = api;
