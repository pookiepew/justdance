const connect = require('./connect');

const findUserByTwitchID = require('./findUserByTwitchID');
const saveUser = require('./saveUser');
const updateConnection = require('./updateConnection');
const getStreamerData = require('./getStreamerData');

module.exports = {
  connect,
  findUserByTwitchID,
  saveUser,
  updateConnection,
  getStreamerData,
};
