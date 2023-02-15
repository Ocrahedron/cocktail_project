const bcrypt = require('bcrypt');
const render = require('../utils/render');
const Error = require('../views/Error');
const Registration = require('../views/pages/Registration');
const { User } = require('../../db/models');

exports.registrationController = async (req, res) => {
  try {
    render(Registration, {}, res);
  } catch (error) {
    render(Error, {
      message: 'Registration page does not work',
      error: {},
    }, res);
  }
};

exports.registrationAddController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name);

    if (!name || !email || !password) {
      render(Error, {
        message: 'All fields are not filled in.',
        error: {},
      }, res);
      return;
    }

    const checkUser = await User.findOne({ where: { email } });
    if (checkUser) {
      render(Error, {
        message: 'This email already exist!',
        error: {},
      }, res);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    console.log(user);
    req.session.user = { id: user.id, name: user.name, email: user.email };
    req.session.save(() => {
      // res.redirect('/');
      res.json({ isRegistratedSuccessful: true });
    });
  } catch (error) {
    res.json({ isRegistratedSuccessful: false, errorMessage: 'Не удалось обновить запись в базе данных.' });

    // render(Error, {
    //   message: 'Failed to log in to the registration page.',
    //   error: {},
    // }, res);
  }
};
