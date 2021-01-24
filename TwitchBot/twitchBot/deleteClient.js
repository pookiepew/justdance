module.exports = deleteClient = (clients, access_token) => {
  console.log(clients);
  delete clients[access_token];
  console.log('After delete client', clients);
  return clients;
};
