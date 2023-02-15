const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      ConTablIngr, User, CockToIngr, Cocktail,
    }) {
      this.belongsToMany(User, { through: ConTablIngr, foreignKey: 'ingredient_id' });
      this.belongsToMany(Cocktail, { through: CockToIngr, foreignKey: 'ingredient_id' });
    }
  }
  Ingredient.init({
    ingredient_name: DataTypes.STRING,
    ingredient_info: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
