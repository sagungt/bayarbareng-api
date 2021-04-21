module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Packages', [{
      planName: 'Spotify Premium 1 Bulan',
      price: 50000,
      serviceId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Packages', null, {});
  },
};
