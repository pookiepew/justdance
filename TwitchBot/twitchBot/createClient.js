const tmi = require('tmi.js');

module.exports = createClient = (login, access_token, channel) => {
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
    channels: ['l3gend_hunt3r', channel],
    options: { debug: true }
  });

  return client;
};
