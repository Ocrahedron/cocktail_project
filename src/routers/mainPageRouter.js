const router = require('express').Router();

const { mainPageAllChannelsController } = require('../controllers/mainPageController');

router
  .route('/')
  .get(mainPageAllChannelsController);

module.exports = router;
