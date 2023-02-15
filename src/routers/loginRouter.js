const router = require('express').Router();

const { loginEnterController } = require('../controllers/loginController');

router
  .route('/')
  // .get(loginController)
  .post(loginEnterController);

module.exports = router;
