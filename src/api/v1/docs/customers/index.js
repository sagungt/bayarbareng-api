const addCustomer = require('./addCustomer');
const findCustomersByDetailId = require('./findCustomersByDetailId');
const findCustomersByGroupId = require('./findCustomersByGroupId');
const findCustomersByUserId = require('./findCustomersByUserId');
const getAllCustomers = require('./getAllCustomers');
const getAllGroups = require('./getAllGroups');

module.exports = {
  '/customers': {
    ...getAllCustomers,
    ...addCustomer,
  },
  '/customers/details/{id}': {
    ...findCustomersByDetailId,
  },
  '/customers/groups/{id}': {
    ...findCustomersByGroupId,
  },
  '/customers/users/{id}': {
    ...findCustomersByUserId,
  },
  '/groups': {
    ...getAllGroups,
  },
};
