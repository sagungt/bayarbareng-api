const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Details extends Model {
    static associate(models) {
      // assotiation to Details table using alias "CustomerDetail"
      this.hasMany(models.Customers, {
        as: 'CustomerDetail',
      });
      // assotiation to Package table using alias "PackageDetail"
      this.belongsTo(models.Packages, {
        foreignKey: 'packageId',
        as: 'PackageDetail',
      });
      // assotiation from Details to Users through Customers using alias "UserDetail"
      this.belongsToMany(models.Users, {
        through: models.Customers,
        as: 'UserDetail',
        uniqueKey: 'userId',
      });
    }
  }
  Details.init({
    currentCharge: DataTypes.DOUBLE,
    dueDate: DataTypes.DATE,
    packageId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Details',
  });
  return Details;
};
