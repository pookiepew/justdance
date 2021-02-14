const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const authenticate = async (req, res, next) => {
  const { code, streamer } = req.query;

  if (!code) {
    const error = new HttpError('Code not provided, please try again', 400);
    return next(error);
  }

  try {
    const response = await axios.get(
      config.TWITCH_AUTH_URL +
        '/authenticate?code=' +
        code +
        '&streamer=' +
        streamer
    );
    res.json({ ...response.data });
  } catch (err) {
    const error = new HttpError(
      err.response.data.message || 'Unknown error!',
      err.response.data.code || 500
    );
    return next(error);
  }
};

const refreshToken = async (req, res, next) => {
  const { twitch_id, refresh_token, streamer } = req.query;

  try {
    const response = await axios.get(
      config.TWITCH_AUTH_URL +
        '/refresh-token' +
        '?twitch_id=' +
        twitch_id +
        '&refresh_token=' +
        refresh_token +
        '&streamer=' +
        streamer
    );
    res.json({ ...response.data });
  } catch (err) {
    const error = new HttpError(
      err.response.data.message || 'Unknown error!',
      err.response.data.code || 500
    );
    return next(error);
  }
};

module.exports = {
  authenticate,
  refreshToken
};
