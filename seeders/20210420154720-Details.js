module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Details', [{
      id: '00000000-0000-0000-0001-000000000000',
      currentCharge: 50000,
      dueDate: new Date(),
      packageId: 1,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Details', null, {});
  },
};
