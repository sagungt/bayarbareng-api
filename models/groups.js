const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    static associate(models) {
      // // assotiation to Customers table using alias "CustomerGroup"
      this.hasMany(models.Customers, {
        as: 'CustomerGroup',
      });
    }
  }
  Groups.init({
    members: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Groups',
  });
  return Groups;
};
