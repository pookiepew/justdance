const mongoDB = require('../mongoDB/index');
const messageHandler = require('./messageHandler');
module.exports = connect = async (client, login, HttpError) => {
  try {
    await client.connect();

    client.on('connected', (address, port) => {
      console.log('CONNNNNNNNNNNN');
    });

    const user = await mongoDB.updateConnection(login, true);

    client.on(
      'message',
      async (channel, tags, message, self) =>
        await messageHandler(client, channel, tags, message, self)
    );

    client.on('disconnected', reason => {
      console.log(reason);
    });

    client.on('cheer', (channel, userstate, message) => {
      console.log(channel, userstate, message);
    });

    return user;
  } catch (err) {
    const error = new HttpError(err + '. access_token is not valid', 401);
    throw error;
  }
};
