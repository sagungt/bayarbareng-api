const getAllReviews = require('./getAllReviews');

module.exports = {
  '/reviews': {
    ...getAllReviews,
  },
};
