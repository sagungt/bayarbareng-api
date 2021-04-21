module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      id: '00000000-0000-0000-0000-000000000001',
      firstName: 'Agung',
      lastName: 'Jordan',
      email: 'agungjordan.aj@gmail.com',
      password: 'jaringan',
      phone: '+6289636812729',
      isVerified: true,
      facebook: true,
      twitter: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
