const connect = require('./connect');

const createNewStreamer = require('./createNewStreamer');
const findStreamer = require('./findStreamer');
const addUserToStreamer = require('./addUserToStreamer');
const findStreamerRefreshToken = require('./findStreamerRefreshToken');
const addSongToStreamer = require('./addSongToStreamer');

const findUserByTwitchID = require('./findUserByTwitchID');
const saveUser = require('./saveUser');
const updateConnection = require('./updateConnection');
const getStreamerData = require('./getStreamerData');

const findAllSongs = require('./findAllSongs');

module.exports = {
  connect,
  createNewStreamer,
  findStreamer,
  addUserToStreamer,
  findStreamerRefreshToken,
  addSongToStreamer,
  findUserByTwitchID,
  saveUser,
  updateConnection,
  getStreamerData,
  findAllSongs
};
