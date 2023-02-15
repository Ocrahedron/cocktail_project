const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

exports.registrationAddController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.json({ isRegistratedSuccessful: false, errorMessage: 'All fields are not filled in.' });
      return;
    }

    const checkUser = await User.findOne({ where: { email } });
    if (checkUser) {
      res.json({ isRegistratedSuccessful: false, errorMessage: 'This email already exist!' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name, email, password: hashedPassword, role: false,
    });
    req.session.user = {
      id: user.id, name: user.name, email: user.email,
    };
    req.session.save(() => {
      res.json({ isRegistratedSuccessful: true });
    });
  } catch (error) {
    res.json({ isRegistratedSuccessful: false, errorMessage: 'Не удалось обновить запись в базе данных.' });
  }
};
