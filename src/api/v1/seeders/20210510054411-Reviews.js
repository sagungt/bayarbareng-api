const faker = require('faker');

const generateReviews = () => {
  const reviews = [];
  for (let i = 0; i <= 20; i += 1) {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const review = faker.commerce.productDescription();
    const createAt = new Date();
    const updatedAt = createAt;

    reviews.push({
      name,
      email,
      review,
      createAt,
      updatedAt,
    });
  }
  return reviews;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reviews = generateReviews();
    await queryInterface.bulkInsert('Reviews', reviews, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
