const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

exports.loginEnterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.json({ isLoginSuccessful: false, errorMessage: 'All fields are not filled in.' });
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.json({ isLoginSuccessful: false, errorMessage: 'There are no any user. Please registrate firstly!' });
      return;
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.json({ isLoginSuccessful: false, errorMessage: 'Name, email or password are not correct!' });
      return;
    }

    req.session.user = { id: user.id, name: user.name, email: user.email };
    req.session.save(() => {
      res.json({ isLoginSuccessful: true });
    });
  } catch (error) {
    res.json({ isLoginSuccessful: false, errorMessage: 'Не удалось войти на логин страницу.' });
  }
};
