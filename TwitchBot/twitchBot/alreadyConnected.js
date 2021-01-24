module.exports = alreadyConnected = (clients, access_token) => {
  if (
    clients[access_token] &&
    clients[access_token].opts.identity.username === login
  ) {
    return true;
  }
};
