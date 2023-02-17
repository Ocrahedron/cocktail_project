const render = require('../utils/render');
const Account = require('../views/pages/Account');
const {
  Cocktail, Ingredient, CockToIngr, Favourite, User, ConTablIngrs,
} = require('../../db/models');

// const { User } = require('../../db/models');

exports.enterToAccountController = async (req, res) => {
  try {
    const findCocktails = await User.findOne({ where: { id: req.session.user.id }, include: Cocktail });
    const allFavourites = findCocktails.Cocktails;
    render(Account, { allFavourites }, res);
  } catch (error) {
    console.log(error);
  }
};

exports.createNewCocktailController = async (req, res) => {
  try {
    if (!req.body.cocktail_name || !req.body.cocktail_info || !req.body.url || !req.body.ingredient_name) {
      res.json({ isCreateSuccessful: false, errorMessage: 'Please add all fields' });
      return;
    }
    const [newCocktail, createdCocktail] = await Cocktail.findOrCreate({
      where: { cocktail_name: req.body.cocktail_name },
      defaults: {
        cocktail_name: req.body.cocktail_name,
        cocktail_info: req.body.cocktail_info,
        craft: req.body.craft,
        url: req.body.url,
      },
    });

    if (!createdCocktail) {
      res.json({ isCreateSuccessful: false, errorMessage: 'Cocktail name already exist!' });
      return;
    }

    const allIngredients = req.body.ingredient_name.split(', ');
    // forAwaitOf

    for (let i = 0; i < allIngredients.length; i += 1) {
      const [ingredient, created] = await Ingredient.findOrCreate({
        where: { ingredient_name: allIngredients[i] },
        defaults: { ingredient_name: allIngredients[i], url: 'no' },
      });

      const addCockToIngr = await CockToIngr.create({
        ingredient_id: ingredient.id,
        cocktail_id: newCocktail.id,
      });
    }
    const addFavourite = await Favourite.create({
      user_id: req.session.user.id,
      cocktail_id: newCocktail.id,
    });
    res.json({ isCreateSuccessful: true });
  } catch (error) {
    console.log(error);
    res.json({ isCreateSuccessful: false, errorMessage: 'Cocktail could not be created' });
  }
};

exports.showAllFavouritesController = async (req, res) => {
  try {
    const findCocktails = await User.findOne({ where: { id: req.session.user.id }, include: Cocktail });
    const allFavourites = findCocktails.Cocktails;
    res.json({ isShowFavourite: true, allFavourites });
  } catch (error) {
    console.log(error);
    res.json({ isShowFavourite: false, errorMessage: 'Can not open the page favourite' });
  }
};

exports.createdByYouController = async (req, res) => {
  try {
    const findCocktails = await User.findOne({ where: { id: req.session.user.id }, include: Cocktail });
    console.log('findCocktails', findCocktails.Cocktails[0].craft);
    const allCreatedByYou = findCocktails.Cocktails.filter((el) => el.get().craft === true);
    console.log('allCreatedByYou', allCreatedByYou);
    res.json({ isShowFavourite: true, allCreatedByYou });
  } catch (error) {
    console.log(error);
    res.json({ isShowFavourite: false, errorMessage: 'Can not open the page favourite' });
  }
};

exports.showIngredientsController = async (req, res) => {
  try {
    const findIngredients = await User.findOne({ where: { id: req.session.user.id }, include: Ingredient });
    const allIngredients = findIngredients.Ingredients;
    res.json({ isShowFavourite: true, allIngredients });
  } catch (error) {
    console.log(error);
    res.json({ isShowFavourite: false, errorMessage: 'Can not open the page favourite' });
  }
};
