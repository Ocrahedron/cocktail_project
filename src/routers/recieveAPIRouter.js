const router = require('express').Router();

const { recieveAPIController } = require('../controllers/recieveAPIController');

// router.post('/', recieveAPIController);

router
  .route('/')
  .post(recieveAPIController);

module.exports = router;
