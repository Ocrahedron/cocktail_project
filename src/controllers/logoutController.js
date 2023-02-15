const render = require('../utils/render');
const Error = require('../views/Error');
// const Main = require('../views/pages/Main');

exports.logoutController = async (req, res, next) => {
  try {
    console.log('LOGOUT')
    req.session.destroy((err) => {
      if (err) return next(err);
    });
    res.clearCookie('kyk');
    // render(Main, {}, res);
    res.redirect('/');
  } catch (error) {
    render(Error, {
      message: 'Не удалось войти на регистрационную страницу.',
      error: {},
    }, res);
  }
};
