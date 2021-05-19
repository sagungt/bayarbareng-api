const express = require('express');

const {
  getAllUsers, getUserById, updateUser, deleteUser,
} = require('../../controllers/Users');

const users = express.Router();

users.get('/', getAllUsers);
users.get('/:id', getUserById);
users.put('/:id', updateUser);
users.delete('/:id', deleteUser);

module.exports = users;
