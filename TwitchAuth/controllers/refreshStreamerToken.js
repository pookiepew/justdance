const axios = require('axios');

const config = require('../utils/config');

const twitchAPI = require('../twitchAPI/index');

const HttpError = require('../utils/http-error');

module.exports = refreshStreamerToken = async (req, res, next) => {
  const { refresh_token } = req.query;
  if (!refresh_token) {
    const error = new HttpError('Refresh token not provided', 400);
    return next(error);
  }
  try {
    const access_token = await twitchAPI.refreshAccessToken(
      refresh_token,
      config,
      axios,
      HttpError
    );
    if (!access_token) {
      const error = new HttpError('Failed getting access token', 500);
      return next(error);
    }
    res.json({ access_token });
  } catch (err) {
    next(err);
  }
};
