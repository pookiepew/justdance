const mongoDB = require('../mongoDB/index');
const refreshAccessToken = require('../utils/refreshAuthToken');
const createClient = require('./createClient');
const connect = require('./connect');
module.exports = connectIfDisconnected = async HttpError => {
  try {
    const streamers = await mongoDB.getStreamers(HttpError);
    for (let i = 0; i < streamers.length; i++) {
      const access_token = await refreshAccessToken(streamers[i].refresh_token);
      const client = await createClient(
        streamers[i].login,
        access_token,
        streamers[i].login
      );
      await connect(client, streamers[i].login, HttpError);
    }
  } catch (err) {
    throw err;
  }
};
