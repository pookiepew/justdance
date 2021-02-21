const axios = require('axios');

const config = require('./config');

module.exports = refreshAuthToken = async refresh_token => {
  try {
    const {
      data: { access_token }
    } = await axios.get(
      config.TWITCH_AUTH_URL +
        '/refresh-streamer-token?refresh_token=' +
        refresh_token
    );
    return access_token;
  } catch (err) {
    throw err;
  }
};
