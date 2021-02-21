const axios = require('axios');

const config = require('../utils/config');

module.exports = getStreamers = async HttpError => {
  try {
    const { data } = await axios.get(config.MONGO_URL + '/streamer/get-all');
    return data;
  } catch (err) {
    const error = new HttpError(
      'Getting streamers failed, please try again',
      500
    );
    throw error;
  }
};
