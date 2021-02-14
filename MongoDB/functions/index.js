const findUserByTwitchID = require('./findUserByTwitchID');
const saveUser = require('./saveUser');
const updateConnection = require('./updateConnection');
const getAllUsersByStreamer = require('./getAllUsersByStreamer');
const getStreamerData = require('./getStreamerData');
const addUserToStreamer = require('./addUserToStreamer');

module.exports = {
  findUserByTwitchID,
  saveUser,
  updateConnection,
  getAllUsersByStreamer,
  getStreamerData,
  addUserToStreamer
};
