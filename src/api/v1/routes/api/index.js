const express = require('express');

const Services = require('../../controllers/Services');
const Packages = require('../../controllers/Packages');
const Users = require('../../controllers/Users');
const Customers = require('../../controllers/Customers');
const Reviews = require('../../controllers/Reviews');

const api = express.Router();

api.get('/services', Services.getAllServices);
api.post('/service', Services.addService);
api.put('/service/:id', Services.updateService);
api.delete('/service/:id', Services.deleteService);

api.get('/packages', Packages.getAllPackages);
api.post('/package', Packages.addPackage);
api.put('/package/:id', Packages.updatePackage);
api.delete('/package/:id', Packages.deletePackage);

api.get('/users', Users.getAllUsers);
api.get('/user/:id', Users.getUserById);
api.put('/user/:id', Users.updateUser);
api.delete('/user/:id', Users.deleteUser);

api.get('/customers', Customers.getAllCustomer);
api.get('/groups', Customers.getAllGroup);
api.get('/customer/user/:id', Customers.findCustomersByUserId);
api.get('/customer/group/:id', Customers.findCustomersByGroupId);
api.get('/customer/detail/:id', Customers.findCustomersByDetailId);
api.post('/customer', Customers.addCustomer);

api.get('/reviews', Reviews.getAllReviews);

module.exports = api;
