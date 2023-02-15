const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Favourite, Cocktail, ConTablIngr, Ingredient,
    }) {
      this.belongsToMany(Ingredient, { through: ConTablIngr, foreignKey: 'user_id' });
      this.belongsToMany(Cocktail, { through: Favourite, foreignKey: 'user_id' });
      //  this.belongsTo(Favourite, { through: UserToChannel, foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
