const router = require('express').Router();

const { mainPageController, showCardsController, addToFavouriteController } = require('../controllers/mainPageController');

router
  .route('/')
  .get(mainPageController);

router
  .route('/showCard')
  .post(showCardsController);

router
  .route('/addToFavourite')
  .post(addToFavouriteController);

module.exports = router;
