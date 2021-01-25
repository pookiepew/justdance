const HttpError = require('../utils/http-error');

const bot = require('../twitchBot/index');

module.exports = initializeBot = async (req, res, next) => {
  const { login, access_token } = req.body;
  let { channel } = req.body;

  if (!login || !access_token) {
    const error = new HttpError(
      'Login and access token is required, please try again',
      400
    );
    return next(error);
  }

  if (!channel) channel = login;

  if (bot.alreadyConnected(bot.clients, login, access_token, channel)) {
    const error = new HttpError('Already connected!', 400);
    return next(error);
  }

  try {
    const client = bot.createClient(login, access_token, channel);

    bot.setClient(bot.clients, client, login, access_token);

    const user = await bot.connect(client, login, HttpError);

    return res.json({ user });
  } catch (err) {
    const error = new HttpError(
      err.message || 'Initializing Bot failed',
      err.code || 500
    );
    next(error);
  }
};
