const findUserByTwitchID = require('./findUserByTwitchID');
const saveUser = require('./saveUser');
const userIsValid = require('./userIsValid');
const updateConnection = require('./updateConnection');

module.exports = {
  findUserByTwitchID,
  saveUser,
  userIsValid,
  updateConnection
};
