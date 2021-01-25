const alreadyConnected = require('./alreadyConnected');
const connect = require('./connect');
const createClient = require('./createClient');

module.exports = initializeBot = async ({ login, access_token, channel }) => {
  if (!login || !access_token) {
    console.log('Login and access token is required, please try again');
    return;
  }

  if (alreadyConnected(access_token)) {
    console.log('initializeBot - Already connected - please make WS return..');
  }

  if (!channel) channel = login;

  try {
    const client = createClient(login, access_token, channel);
    twitchBot.clients[access_token] = client;
    const user = await connect(client, login);

    return console.log(user);
  } catch (error) {
    console.log(error);
    console.log('initializeBot FAILED');
  }
};
