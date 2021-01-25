const alreadyConnected = require('./alreadyConnected');
const connect = require('./connect');
const createClient = require('./createClient');
const deleteClient = require('./deleteClient');
const getClient = require('./getClient');
const setClient = require('./setClient');
const clients = require('./clients');

module.exports = {
  alreadyConnected,
  clients,
  connect,
  createClient,
  deleteClient,
  getClient,
  setClient
};
