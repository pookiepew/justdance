module.exports = setClient = (clients, client, login, access_token) => {
  if (
    clients[access_token] &&
    clients[access_token].opts.identity.username === login
  ) {
    const error = new HttpError('Client already exists!', 400);
    throw error;
  }

  clients[access_token] = client;
};
