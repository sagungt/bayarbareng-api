const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

module.exports = {
  signUp: async (req, res) => {
    try {
      const checkIfUserExist = await Users.findOne({ where: { email: req.body.email } });
      if (checkIfUserExist !== null) {
        return res.status(409).json({
          status: 'failed',
          message: 'Email already used',
        });
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({
            status: 'failed',
            message: err,
          });
        }
        await Users.create({
          id: uuid.v4(),
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
          phone: req.body.phone,
          isVerified: false,
          facebook: false,
          twitter: false,
        });
        return res.status(201).json({
          status: 'success',
          message: 'User registered',
        });
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  login: async (req, res) => {
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (user === null) return res.status(400).json({ status: 'failed', message: 'Email not found' });
    bcrypt.compare(req.body.password, user.password, (bErr, bResult) => {
      if (bErr) return res.status(401).json({ status: 'failed', message: 'Wrong email or password' });
      if (bResult) {
        const token = jwt.sign({
          id: user.id,
          email: user.email,
        }, 'bayarbarengjwttoken', { expiresIn: '1h' });
        return res.status(200)
          .cookie('token', token, {
            expires: new Date(Date.now() + 3600000),
            secure: false, // true if https
            httpOnly: true,
          })
          .json({
            status: 'success',
            message: 'Logged in',
            token,
            user,
          });
      }
      return res.status(401).json({ status: 'success', msg: 'Wrong username or password' });
    });
  },
  logout: (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await Users.findAll({
        attributes: [
          'firstName',
          'lastName',
          'email',
          'phone',
        ],
      });
      return res.status(200).json({
        status: 'success',
        users,
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = Users.findOne({ where: { id } });
      if (!user) {
        return res.status(404).json({
          status: 'failed',
          message: `${id} not found`,
        });
      }

      let password = '';
      if (req.body.password) {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          if (err) {
            return res.status(500).json({
              status: 'failed',
              message: err,
            });
          }
          password = hash;
        });
      }
      const [updated] = await Users.update({
        id: user.id,
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName,
        email: user.email,
        password: password || user.password,
        phone: req.body.phone || user.phone,
        isVerified: user.isVerified,
        facebook: user.facebook,
        twitter: user.twitter,
      }, {
        where: { id },
      });
      if (updated) {
        return res.status(200).json({
          status: 'success',
          message: 'User updated',
        });
      }
      throw new Error('Cannot update user');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.destroy({ where: { id } });
      if (user) {
        return res.json({
          status: 'success',
          message: 'User deleted',
        });
      }
      return res.status(404).json({
        status: 'failed',
        message: 'Cannot find user',
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findOne({
        where: { id },
        attributes: [
          'id',
          'firstName',
          'lastName',
          'email',
          'phone',
          'isVerified',
          'facebook',
          'twitter',
        ],
      });
      if (user) {
        return res.status(200).json({
          status: 'success',
          user,
        });
      }
      return res.status(404).json({
        status: 'success',
        message: 'Cannot find user',
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
};
