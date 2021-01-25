const mongoDB = require('../mongoDB/index');
const messageHandler = require('./messageHandler');
module.exports = connect = async (client, login, HttpError) => {
  try {
    await client.connect();

    client.on('connected', (address, port) => {});
    const user = await mongoDB.updateConnection(login, true);

    client.on('message', (channel, tags, message, self) =>
      messageHandler(channel, tags, message, self)
    );

    return user;
  } catch (err) {
    const error = new HttpError(err + '. access_token is not valid', 401);
    throw error;
  }
};
