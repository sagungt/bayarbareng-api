const { Services } = require('../models');

module.exports = {
  getAllServices: async (req, res) => {
    try {
      const services = await Services.findAll();
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
          service,
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
        return res.status(200).json({
          status: 'success',
          message: 'Service updated',
          service,
        });
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
        return res.status(204).json({
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
};
