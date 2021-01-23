const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const refreshAccessToken = require('../twitchAPI/refreshAccessToken');

const refreshTokenWithTwitch = async (req, res, next) => {
  const { twitch_id, refresh_token } = req.query;

  if (!twitch_id || !refresh_token) {
    const error = new HttpError(
      'Twitch ID or Refresh token was not found, please supply both as a query',
      401
    );
    return next(error);
  }

  try {
    // const user = await mongoDB.findUserByTwitchID(twitch_id);

    if (refresh_token !== user.refresh_token) {
      const error = new HttpError(
        'Refresh token does not match our records, please try again',
        401
      );
      throw error;
    }

    const access_token = await refreshAccessToken(
      user.refresh_token,
      config,
      axios,
      HttpError
    );

    return res.json({
      ...user._doc,
      access_token
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = refreshTokenWithTwitch;
