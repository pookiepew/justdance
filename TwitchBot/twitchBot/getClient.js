module.exports = getClient = access_token => {
  const client = clients[access_token];

  if (!client) {
    console.log('getClient - no client - please make WS return..');
  }

  return client;
};
