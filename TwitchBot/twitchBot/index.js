const alreadyConnected = require('./alreadyConnected');
const connect = require('./connect');
const createClient = require('./createClient');
const deleteClient = require('./deleteClient');
const getClient = require('./getClient');
const initializeBot = require('./initializeBot');

const clients = {};

module.exports = {
  alreadyConnected,
  clients,
  connect,
  createClient,
  deleteClient,
  getClient,
  initializeBot
};
