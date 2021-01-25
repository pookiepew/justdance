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

// Example response:

// {
//   "shouldBeConnected": true,
//   "_id": "60048bc41b4590302018c8cb",
//   "twitch_id": "115415445",
//   "createdAt": "2021-01-17T18:30:12.079Z",
//   "display_name": "pookiepew",
//   "login": "pookiepew",
//   "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/8feac4b0-22a9-49cd-a8d5-d6075d8edc20-profile_image-300x300.png",
//   "refresh_token": "TOKEN",
//   "updatedAt": "2021-01-25T17:26:57.602Z"
// }

module.exports = {
  initialize
};
