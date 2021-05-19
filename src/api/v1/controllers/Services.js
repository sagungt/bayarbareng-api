const { Services } = require('../models');

module.exports = {
  getAllServices: async (req, res) => {
    try {
      const services = await Services.findAll({
        attributes: ['id', 'serviceName'],
      });
      return res.status(200).json({
        status: 'success',
        services,
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  addService: async (req, res) => {
    try {
      const checkIfExist = await Services.findOne({ where: { serviceName: req.body.serviceName } });
      if (checkIfExist === null) {
        const service = await Services.create(req.body);
        return res.status(201).json({
          status: 'success',
          message: 'Service added',
        });
      }
      throw new Error('Service already available');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  updateService: async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Services.update(req.body, {
        where: { id },
      });
      if (updated) {
        const service = await Services.findOne({ where: { id } });
        if (service) {
          return res.status(200).json({
            status: 'success',
            message: 'Service updated',
          });
        }
      }
      throw new Error('Service not found');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  deleteService: async (req, res) => {
    try {
      const { id } = req.params;
      const service = await Services.destroy({ where: { id } });
      if (service) {
        return res.json({
          status: 'success',
          message: 'Service deleted',
        });
      }
      throw new Error('Service not found');
    } catch (err) {
      return res.status(500).json({
        status: 'fail',
        message: err.message,
      });
    }
  },
  getServiceById: async (req, res) => {
    try {
      const { id } = req.params;
      const service = Services.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      if (service) {
        return res.status(200).json({
          status: 'success',
          service,
        });
      }
      return res.status(404).json({
        status: 'failed',
        message: 'Service not found',
      });
    } catch (err) {
      return res.status(500).json({
        status: 'fail',
        message: err.message,
      });
    }
  },
};
