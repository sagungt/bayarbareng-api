const express = require('express');

const {
  getAllServices, addService, updateService, deleteService, getServiceById,
} = require('../../controllers/Services');

const services = express.Router();

services.get('/', getAllServices);
services.get('/:id', getServiceById);
services.post('/', addService);
services.put('/:id', updateService);
services.delete('/:id', deleteService);

module.exports = services;
