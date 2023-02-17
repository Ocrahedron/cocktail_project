const router = require('express').Router();

const {
  enterToAccountController, createNewCocktailController, showAllFavouritesController, createdByYouController, showIngredientsController,
} = require('../controllers/enterToAccountController');

const { isAuth } = require('../middlewares/functs');

router
  .route('/')
  .get(isAuth, enterToAccountController);

router
  .route('/create/add')
  .post(isAuth, createNewCocktailController);

router
  .route('/favourite')
  .get(showAllFavouritesController);

router
  .route('/ingredients')
  .get(isAuth, showIngredientsController);

router
  .route('/createdByYou')
  .get(isAuth, createdByYouController);
module.exports = router;
