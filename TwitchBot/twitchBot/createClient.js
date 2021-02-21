const tmi = require('tmi.js');

module.exports = createClient = async (login, access_token, channel) => {
  /** @type {import('tmi.js').Client} */
  const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true
    },
    identity: {
      username: login,
      password: access_token
    },
    channels: [channel],
    options: { debug: true }
  });

  return client;
};
