const { Packages, Services } = require('../models');

module.exports = {
  getAllPackages: async (req, res) => {
    try {
      const packages = await Packages.findAll({
        include: [
          {
            model: Services,
            as: 'Plan',
          },
        ],
      });
      return res.status(200).json({
        status: 'success',
        packages,
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  addPackage: async (req, res) => {
    try {
      const checkIfExist = await Packages.findOne({
        where: {
          planName: req.body.planName,
          price: req.body.price,
          serviceId: req.body.serviceId,
        },
      });
      if (checkIfExist === null) {
        const plan = await Packages.create(req.body);
        return res.status(201).json({
          status: 'success',
          message: 'Package added',
          package: plan,
        });
      }
      throw new Error('Package already available');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  updatePackage: async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Packages.update(req.body, {
        where: { id },
      });
      if (updated) {
        const plan = await Packages.findOne({ where: { id } });
        return res.status(200).json({
          status: 'success',
          message: 'Package updated',
          package: plan,
        });
      }
      throw new Error('Package not found');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
  deletePackage: async (req, res) => {
    try {
      const { id } = req.params;
      const plan = await Packages.destroy({ where: { id } });
      if (plan) {
        return res.status(204).json({
          status: 'success',
          message: 'Package deleted',
        });
      }
      throw new Error('Package not found');
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.massage,
      });
    }
  },
};
