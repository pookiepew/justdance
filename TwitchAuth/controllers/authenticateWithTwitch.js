const axios = require('axios');

const config = require('../utils/config');

const mongoDB = require('../mongoDB/index');

const getAccessToken = require('../twitchAPI/getAccessToken');

const validateAccessToken = require('../twitchAPI/validateAccessToken');

const getUserById = require('../twitchAPI/getUserById');

const HttpError = require('../utils/http-error');

const authenticateWithTwitch = async (req, res, next) => {
  const { code } = req.query;

  if (!code) {
    const error = new HttpError('No code supplied, please supply a code.', 401);
    return next(error);
  }

  try {
    const { access_token, refresh_token } = await getAccessToken(
      code,
      config,
      axios,
      HttpError
    );

    const twitch_id = await validateAccessToken(access_token, axios, HttpError);

    const { login, display_name, profile_image_url } = await getUserById(
      access_token,
      twitch_id,
      config,
      axios,
      HttpError
    );

    const user = await mongoDB.saveUser(
      {
        login,
        twitch_id,
        display_name,
        profile_image_url,
        refresh_token
      },
      config,
      axios,
      HttpError
    );

    return res.json({
      ...user.data,
      access_token
    });
  } catch (error) {
    return next(error);
  }
};

// Example response to client:

// {
//   "shouldBeConnected": false,
//   "_id": "600482329cc9a36b5b14bd4c",
//   "twitch_id": "115415445",
//   "createdAt": "2021-01-17T18:30:12.079Z",
//   "display_name": "pookiepew",
//   "login": "pookiepew",
//   "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/8feac4b0-22a9-49cd-a8d5-d6075d8edc20-profile_image-300x300.png",
//   "refresh_token": "TOKEN",
//   "updatedAt": "2021-01-17T18:30:12.079Z",
//   "access_token": "TOKEN"
// }

module.exports = authenticateWithTwitch;
