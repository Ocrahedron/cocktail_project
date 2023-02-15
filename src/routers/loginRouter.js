const router = require('express').Router();

const { loginController, loginEnterController } = require('../controllers/loginController');

router
  .route('/')
  .get(loginController)
  .post(loginEnterController);

module.exports = router;
