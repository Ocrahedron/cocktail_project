const router = require('express').Router();

const { mainPageController, showCardsController, addToFavouriteController } = require('../controllers/mainPageController');
const { isAuth } = require('../middlewares/functs');

router
  .route('/')
  .get(mainPageController);

router
  .route('/showCard')
  .post(showCardsController);

router
  .route('/addToFavourite')
  .post(isAuth, addToFavouriteController);

module.exports = router;
