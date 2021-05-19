const { Sequelize } = require('sequelize');
const { v4, validate } = require('uuid');
const {
  Customers, Details, Groups, Users, Packages, Services,
} = require('../models');

const optionsCustomer = (whereValue = null) => ({
  where: (whereValue !== null) ? whereValue : '',
  attributes: [
    'userId',
    'detailId',
    'groupId',
  ],
  include: [
    {
      model: Users,
      as: 'CustomerUser',
      attributes: [
        'firstName',
        'lastName',
        'email',
        'phone',
      ],
    },
    {
      model: Groups,
      as: 'CustomerGroup',
      attributes: ['members'],
    },
    {
      model: Details,
      as: 'CustomerDetail',
      attributes: ['currentCharge', 'dueDate', 'isActive'],
      include: {
        model: Packages,
        as: 'PackageDetail',
        attributes: ['id', 'planName', 'price'],
        include: {
          model: Services,
          as: 'Plan',
          attributes: ['serviceName'],
        },
      },
    },
  ],
});

module.exports = {
  findCustomersByUserId: async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customers.findAll(optionsCustomer({ userId: id }));
      if (customer.length !== 0) {
        return res.status(200).json({
          status: 'success',
          customer,
        });
      }
      throw new Error(`Customers with ID:${id} not found`);
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  findCustomersByGroupId: async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customers.findAll(optionsCustomer({ groupId: id }));
      if (customer.length !== 0) {
        return res.status(200).json({
          status: 'success',
          customer,
        });
      }
      throw new Error(`Customers with ID:${id} not found`);
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  findCustomersByDetailId: async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customers.findOne(optionsCustomer({ detailId: id }));
      if (customer) {
        return res.status(200).json({
          status: 'success',
          customer,
        });
      }
      throw new Error(`Customers with ID:${req.params.id} not found`);
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  addCustomer: async (req, res) => {
    try {
      const today = new Date();
      const dueDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const detailId = v4();
      await Details.create({
        id: detailId,
        currentCharge: req.body.price,
        dueDate,
        packageId: req.body.packageId,
        isActive: false,
      });
      let groupId = '' || req.body.groupId;
      if (!validate(req.body.groupId)) {
        groupId = v4();
        await Groups.create({
          id: groupId,
          members: 5,
        });
      }
      await Customers.create({
        UserId: req.body.userId,
        DetailId: detailId,
        groupId,
        selfGranted: false,
      });
      const customer = await Customers.findOne(optionsCustomer({ detailId }));
      if (customer) {
        return res.status(201).json({
          status: 'success',
          customer,
        });
      }
      throw new Error('Failed to create customer');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  getAllGroups: async (req, res) => {
    try {
      const groups = await Groups.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      if (groups) {
        return res.status(200).json({
          status: 'success',
          groups,
        });
      }
      throw new Error('Cannot get all groups');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  getAllCustomer: async (req, res) => {
    try {
      const customers = await Customers.findAll(optionsCustomer());
      if (customers.length !== 0) {
        return res.status(200).json({
          status: 'success',
          customers,
        });
      }
      throw new Error('Cannot get all customers');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
};
