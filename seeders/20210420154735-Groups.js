module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Groups', [{
      id: '00000000-0000-0001-0000-000000000000',
      members: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groups', null, {});
  },
};
