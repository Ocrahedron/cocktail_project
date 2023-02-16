const render = require('../utils/render');
const Error = require('../views/Error');
const Main = require('../views/pages/Main');
const {
  Cocktail, CockToIngr, Ingredient, Favourite,
} = require('../../db/models');

exports.mainPageController = async (req, res) => {
  try {
    const allCocktails = await Cocktail.findAll({ where: { craft: false }, raw: true });
    render(Main, { allCocktails }, res);
  } catch (error) {
    console.log(error);
    render(Error, {
      message: 'Не удалось войти на главную страницу.',
      error: {},
    }, res);
  }
};

exports.showCardsController = async (req, res) => {
  try {
    const { cocktail_name } = req.body;
    const findCocktail = await Cocktail.findOne({ where: { cocktail_name } });
    const findIngrs = await Cocktail.findOne({ where: { id: findCocktail.id }, include: Ingredient });
    // console.log('Ингредиент', findIngrs.get().Ingredients[0].get().ingredient_name);
    const allIngrs = findIngrs.Ingredients.map((el) => el.get());
    res.json({ isCreateSuccessful: true, allIngrs, findCocktail });
  } catch (error) {
    console.log(error);
    res.json({ isCreateSuccessful: false });
  }
};
exports.addToFavouriteController = async (req, res) => {
  try {
    const addFavourite = await Favourite.create({
      user_id: req.session.user.id,
      cocktail_id: req.body.cocktail_id,
    });
    res.json({ isAddSuccessful: true });
  } catch (error) {
    console.log(error);
    res.json({ isAddSuccessful: false });
  }
};

