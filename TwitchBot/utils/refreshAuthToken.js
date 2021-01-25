const axios = require('axios');

const config = require('./config');

module.exports = refreshAuthToken = async (twitch_id, refresh_token) => {
  try {
    const qs = new URLSearchParams({
      twitch_id,
      refresh_token
    });
    const {
      data: { access_token }
    } = await axios.get(config.TWITCH_AUTH_URL + '/refresh-token?' + qs);
    return access_token;
  } catch (err) {
    console.log(err);
  }
};
