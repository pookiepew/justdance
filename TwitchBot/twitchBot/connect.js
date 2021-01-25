const mongoDB = require('../mongoDB/index');
module.exports = connect = async (client, login, HttpError) => {
  try {
    await client.connect();

    client.on('connected', (address, port) => {});
    const user = await mongoDB.updateConnection(login, true);

    client.on('message', async (channel, tags, message, self) => {
      if (self || tags['message-type'] === 'whisper') return;
      console.log(message);
    });

    return user;
  } catch (err) {
    const error = new HttpError(err + '. access_token is not valid', 401);
    throw error;
  }
};
