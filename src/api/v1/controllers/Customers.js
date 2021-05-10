const { v4, validate } = require('uuid');
const { Customers, Details, Groups } = require('../models');

module.exports = {
  findCustomersByUserId: async (req, res) => {
    try {
      const customers = await Customers.findAll({
        where: { id: req.body.userId },
        include: ['CustomerUser', 'CustomerDetail', 'CustomerGroup'],
      });
      if (customers) {
        return res.status(200).json({
          status: 'success',
          customers,
        });
      }
      throw new Error(`Customers with ID:${req.body.userId} not found`);
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  findCustomersByGroupId: async (req, res) => {
    try {
      const customers = await Customers.findAll({
        where: { id: req.body.groupId },
        include: ['CustomerUser', 'CustomerDetail', 'CustomerGroup'],
      });
      if (customers) {
        return res.status(200).json({
          status: 'success',
          customers,
        });
      }
      throw new Error(`Customers with ID:${req.body.grupId} not found`);
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  findCustomersByDetailId: async (req, res) => {
    try {
      const details = await Customers.findAll({
        where: { detailId: req.body.detailId },
        include: 'CustomerDetail',
      });
      if (details) {
        return res.status(200).json({
          status: 'success',
          details,
        });
      }
      throw new Error(`Customers with ID:${req.body.detailId} not found`);
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
      const customer = await Customers.create({
        UserId: req.body.userId,
        DetailId: detailId,
        groupId,
        selfGranted: false,
      });
      return res.status(201).json({
        status: 'success',
        customer,
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  getAllGroup: async (req, res) => {
    try {
      const groups = await Groups.findAll();
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
      const customers = await Customers.findAll({
        include: ['CustomerUser', 'CustomerGroup', 'CustomerDetail'],
      });
      if (customers) {
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
