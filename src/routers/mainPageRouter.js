const router = require('express').Router();

const { mainPageController } = require('../controllers/mainPageController');

router
  .route('/')
  .get(mainPageController);

module.exports = router;
