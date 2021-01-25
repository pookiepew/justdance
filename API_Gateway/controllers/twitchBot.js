const botSocket = require('../websockets/twitchBot');

const HttpError = require('../utils/http-error');

const initialize = (req, res, next) => {
  const { login, access_token } = req.body;
  let { channel } = req.body;

  if (!login || !access_token) {
    const error = new HttpError(
      'Login or access token missing, please try again',
      400
    );
    return next(error);
  }

  if (!channel) channel = login;

  // Websocket to TwitchBot service.
  botSocket.getServer().emit('test', { login, access_token, channel });
  try {
    return res.json({ login, access_token, channel });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  initialize
};
