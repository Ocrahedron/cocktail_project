const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Favourite, User, CockToIngr, Ingredient,
    }) {
      this.belongsToMany(User, { through: Favourite, foreignKey: 'cocktail_id' });
      this.belongsToMany(Ingredient, { through: CockToIngr, foreignKey: 'cocktail_id' });
    }
  }
  Cocktail.init({
    cocktail_name: DataTypes.STRING,
    cocktail_info: DataTypes.TEXT,
    craft: DataTypes.BOOLEAN,
    url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};
