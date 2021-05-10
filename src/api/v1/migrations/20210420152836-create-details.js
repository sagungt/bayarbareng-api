module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Details', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING(36),
      },
      currentCharge: {
        type: Sequelize.DOUBLE,
      },
      dueDate: {
        type: Sequelize.DATE,
      },
      packageId: {
        type: Sequelize.INTEGER,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Details');
  },
};
