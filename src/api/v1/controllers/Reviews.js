const { Reviews } = require('../models');

module.exports = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Reviews.findAll();
      return res.status(200).json({
        status: 'success',
        reviews,
      });
    } catch (err) {
      return res.status(500).json({
        status: 'failed',
        message: err.message,
      });
    }
  },
};
