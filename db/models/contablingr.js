const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ConTablIngr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    }
  }
  ConTablIngr.init({
    ingredient_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ConTablIngr',
  });
  return ConTablIngr;
};
