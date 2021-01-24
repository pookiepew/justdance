module.exports = connect = async (client, login) => {
  try {
    await client.connect();

    // const user = await mongoDB.setConnection(login, true);

    client.on(
      'message',
      async (channel, tags, message, self) =>
        await messageHandler(channel, tags, message, self, client)
    );

    return user;
  } catch (err) {
    console.log(err);
    console.log('connect - error!');
  }
};
