const express = require('express');

const {
  getAllCustomer,
  getAllGroups,
  findCustomersByDetailId,
  findCustomersByGroupId,
  findCustomersByUserId,
  addCustomer,
} = require('../../controllers/Customers');

const customers = express.Router();

customers.get('/groups', getAllGroups);
customers.get('/', getAllCustomer);
customers.get('/users/:id', findCustomersByUserId);
customers.get('/groups/:id', findCustomersByGroupId);
customers.get('/details/:id', findCustomersByDetailId);
customers.post('/', addCustomer);

module.exports = customers;
