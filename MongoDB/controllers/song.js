const Song = require('../models/Song');
const HttpError = require('../utils/http-error');

const db = require('../db/index');

const findAll = async (req, res, next) => {
  try {
    const songs = await db.findAllSongs(Song);
    res.json(songs);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAll
};
