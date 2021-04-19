const Services = require('../models/Services');

module.exports = {
  getServices: async (req, res) => {
    try {
      const services = await Services.findAll();
      res.send({ data: services });
    } catch (err) {
      res.send({ msg: err });
    }
  },
};
