const axios = require('axios');

const config = require('../utils/config');

const mongoDB = require('../mongoDB/index');

const HttpError = require('../utils/http-error');

const twitchAPI = require('../twitchAPI/index');

const refreshTokenWithTwitch = async (req, res, next) => {
  const { twitch_id, refresh_token, streamer } = req.query;

  if (!twitch_id || !refresh_token || !streamer) {
    const error = new HttpError(
      'Twitch ID, Refresh token or streamer was not found, please supply all as a queries',
      401
    );
    return next(error);
  }

  try {
    const user = await mongoDB.findUserByTwitchID(
      twitch_id,
      streamer,
      config,
      axios,
      HttpError
    );

    if (refresh_token !== user.refresh_token) {
      const error = new HttpError(
        'Refresh token does not match our records, please try again',
        401
      );
      throw error;
    }

    const access_token = await twitchAPI.refreshAccessToken(
      user.refresh_token,
      config,
      axios,
      HttpError
    );

    return res.json({
      ...user,
      access_token
    });
  } catch (error) {
    return next(error);
  }
};

// Example response:

// {
//   "shouldBeConnected": false,
//   "_id": "60048bc41b4590302018c8cb",
//   "twitch_id": "115415445",
//   "createdAt": "2021-01-17T18:30:12.079Z",
//   "display_name": "pookiepew",
//   "login": "pookiepew",
//   "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/8feac4b0-22a9-49cd-a8d5-d6075d8edc20-profile_image-300x300.png",
//   "refresh_token": "TOKEN",
//   "updatedAt": "2021-01-24T00:36:26.721Z",
//   "access_token": "TOKEN"
// }

module.exports = refreshTokenWithTwitch;
