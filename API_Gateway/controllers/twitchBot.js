const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const initialize = async (req, res, next) => {
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

  try {
    const {
      data: { user }
    } = await axios.post(
      config.TWITCH_BOT_URL + '/initialize',
      { login, access_token, channel },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return res.json({ ...user });
  } catch (err) {
    const error = new HttpError(
      err.response.data.message || 'Unknown error',
      err.response.data.code || 500
    );
    next(error);
  }
};

module.exports = {
  initialize
};
