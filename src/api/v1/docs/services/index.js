const addService = require('./addService');
const deleteService = require('./deleteService');
const getAllServices = require('./getAllServices');
const getServiceById = require('./getServiceById');
const updateService = require('./updateService');

module.exports = {
  '/services': {
    ...addService,
    ...getAllServices,
  },
  '/services/{id}': {
    ...deleteService,
    ...getServiceById,
    ...updateService,
  },
};
