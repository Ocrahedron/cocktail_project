'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CockToIngr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CockToIngr.init({
    ingredient_id: DataTypes.INTEGER,
    cocktail_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CockToIngr',
  });
  return CockToIngr;
};