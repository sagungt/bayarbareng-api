const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    static associate(models) {
      // assotiation to Package table using alias "Plan"
      this.hasMany(models.Packages, {
        foreignKey: 'serviceId',
        as: 'Plan',
      });
    }
  }
  Services.init({
    serviceName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Services',
  });
  return Services;
};
