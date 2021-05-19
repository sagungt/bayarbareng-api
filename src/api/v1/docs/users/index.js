const deleteUser = require('./deleteUser');
const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');
const updateUser = require('./updateUser');

module.exports = {
  '/users': {
    ...getAllUsers,
  },
  '/users/{id}': {
    ...deleteUser,
    ...getUserById,
    ...updateUser,
  },
};
