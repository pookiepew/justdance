const mongoDB = require('../mongoDB/index');
const refreshAccessToken = require('../utils/refreshAuthToken');
const createClient = require('./createClient');
const connect = require('./connect');
module.exports = connectIfDisconnected = async HttpError => {
  try {
    const users = await mongoDB.getUsers();
    console.log(users);
    for (let i = 0; i < users.length; i++) {
      if (users[i].shouldBeConnected) {
        const access_token = await refreshAccessToken(
          users[i].twitch_id,
          users[i].refresh_token
        );
        console.log(access_token);
        const client = await createClient(
          users[i].login,
          access_token,
          users[i].login
        );
        await connect(client, users[i].login, HttpError);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
