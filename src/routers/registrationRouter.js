const router = require('express').Router();

const { registrationController, registrationAddController } = require('../controllers/registrationController');

router
  .route('/')
  // .get(registrationController)
  .post(registrationAddController);

module.exports = router;
