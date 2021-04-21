const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    static associate(models) {
      // assotiation to Services table using alias "Plan"
      this.belongsTo(models.Services, {
        foreignKey: 'serviceId',
        onDelete: 'CASCADE',
        as: 'Plan',
      });
      // assotiation to Package table using alias "PackageDetail"
      this.hasMany(models.Details, {
        foreignKey: 'packageId',
        as: 'PackageDetail',
      });
    }
  }
  Packages.init({
    planName: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    serviceId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Packages',
  });
  return Packages;
};
