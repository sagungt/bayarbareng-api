const { Reviews } = require('../models');

module.exports = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Reviews.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      reviews.forEach((item) => {
        const id = item.email.search('@');
        const mail = item.email.slice(id);
        // eslint-disable-next-line no-param-reassign
        item.email = `${item.email.slice(0, 3)}...${item.email.slice(id - 2, id)}${mail}`;
      });
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
