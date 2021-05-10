const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // assotiation to Users table using alias "CustomerUser"
      this.hasMany(models.Customers, {
        as: 'CustomerUser',
      });
      // assotiation from Users to Details through Customers using alias "UserDetail"
      this.belongsToMany(models.Details, {
        through: models.Customers,
        as: 'UserDetail',
        uniqueKey: 'detailId',
      });
    }
  }
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
    facebook: DataTypes.BOOLEAN,
    twitter: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
