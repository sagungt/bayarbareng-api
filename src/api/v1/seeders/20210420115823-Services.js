module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Services', [{
      serviceName: 'Spotify',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
