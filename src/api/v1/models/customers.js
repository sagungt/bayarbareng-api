const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    static associate(models) {
      // assotiation to Users table using alias "CustomerUser"
      this.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'CustomerUser',
      });
      // assotiation to Details table using alias "CustomerDetail"
      this.belongsTo(models.Details, {
        foreignKey: 'detailId',
        as: 'CustomerDetail',
      });
      // assotiation to Groups table using alias "CustomerGroup"
      this.belongsTo(models.Groups, {
        foreignKey: 'groupId',
        as: 'CustomerGroup',
      });
    }
  }
  Customers.init({
    userId: DataTypes.STRING(36),
    detailId: DataTypes.STRING(36),
    groupId: DataTypes.STRING(36),
    selfGranted: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Customers',
  });
  return Customers;
};
