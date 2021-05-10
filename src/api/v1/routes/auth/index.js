const express = require('express');

const Users = require('../../controllers/Users');

const auth = express.Router();

auth.get('/', (req, res) => res.json({ data: 'Hello' }));
auth.post('/signup', Users.signUp);
auth.post('/login', Users.login);
auth.get('/logout', Users.logout);

module.exports = auth;
