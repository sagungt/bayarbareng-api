module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', [{
      id: 1,
      userId: '00000000-0000-0000-0000-000000000001',
      detailId: '00000000-0000-0000-0001-000000000000',
      groupId: '00000000-0000-0001-0000-000000000000',
      selfGranted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  },
};
