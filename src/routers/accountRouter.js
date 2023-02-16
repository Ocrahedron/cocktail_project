const router = require('express').Router();

const {
  enterToAccountController, createNewCocktailController, showAllFavouritesController, createdByYouController, showIngredientsController,
} = require('../controllers/enterToAccountController');
// const { enterToCreateController } = require('../controllers/enterToCreateController');

router
  .route('/')
  .get(enterToAccountController);

router
  .route('/create/add')
  .post(createNewCocktailController);

router
  .route('/favourite')
  .get(showAllFavouritesController);

router
  .route('/ingredients')
  .post(showIngredientsController);

router
  .route('/createdByYou')
  .get(createdByYouController);
module.exports = router;
