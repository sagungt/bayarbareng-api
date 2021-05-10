const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    review: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};
