const render = require('../utils/render');
const Error = require('../views/Error');
const Main = require('../views/pages/Main');
const { Channel } = require('../../db/models');

exports.mainPageAllChannelsController = async (req, res) => {
  try {
    // const allChannels = await Channel.findAll({ order: [['id', 'DESC']] });
    render(Main, { }, res);
  } catch (error) {
    console.log(error);
    render(Error, {
      message: 'Не удалось войти на главную страницу.',
      error: {},
    }, res);
  }
};
