module.exports = alreadyConnected = (clients, login, access_token, channel) => {
  if (
    clients[access_token] &&
    clients[access_token].opts.identity.username === login
  ) {
    return true;
  }
  return false;
};
