const axios = require('axios');

const config = require('../utils/config');

const mongoDB = require('../mongoDB/index');

const twitchAPI = require('../twitchAPI/index');

const HttpError = require('../utils/http-error');

const authenticateWithTwitch = async (req, res, next) => {
  const { code, streamer } = req.query;

  if (!code || !streamer) {
    const error = new HttpError(
      'No code or streamer name supplied, please supply both.',
      401
    );
    return next(error);
  }

  try {
    const { access_token, refresh_token } = await twitchAPI.getAccessToken(
      code,
      config,
      axios,
      HttpError
    );

    const twitch_id = await twitchAPI.validateAccessToken(
      access_token,
      axios,
      HttpError
    );

    const {
      login,
      display_name,
      profile_image_url,
    } = await twitchAPI.getUserById(
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
        streamer,
        refresh_token,
      },
      config,
      axios,
      HttpError
    );

    // await mongoDB.addUserToStreamer(
    //   {
    //     _id: user._id,
    //     display_name,
    //     profile_image_url,
    //     streamer
    //   },
    //   config,
    //   axios,
    //   HttpError
    // );

    return res.json({
      user,
      access_token,
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
