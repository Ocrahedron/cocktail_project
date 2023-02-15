const bcrypt = require('bcrypt');
const render = require('../utils/render');
const Error = require('../views/Error');
const Login = require('../views/pages/Login');
const { User } = require('../../db/models');

exports.loginController = async (req, res) => {
  try {
    render(Login, {}, res);
  } catch (error) {
    render(Error, {
      message: 'Не удалось войти на регистрационную страницу.',
      error: {},
    }, res);
  }
};

exports.loginEnterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      render(Error, {
        message: 'All fields are not filled in.',
        error: {},
      }, res);
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      render(Error, {
        message: 'There are no any user. Please registrate firstly!',
        error: {},
      }, res);
      return;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      render(Error, {
        message: 'Name, email or password are not correct!',
        error: {},
      }, res);
      return;
    }

    req.session.user = { id: user.id, name: user.name, email: user.email };
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    render(Error, {
      message: 'Не удалось войти на регистрационную страницу.',
      error: {},
    }, res);
  }
};
