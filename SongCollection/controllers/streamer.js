const axios = require('axios');

const config = require('../utils/config');

const mongoDB = require('../mongoDB/index');

const HttpError = require('../utils/http-error');

const addSong = async (req, res, next) => {
  const { streamer, list, songId } = req.body;
  if (!streamer || !list || !songId) {
    const error = new HttpError('Streamer, list or songId not provided', 400);
    return next(error);
  }
  try {
    await mongoDB.addSongToStreamer(streamer, list, songId, axios, config);
    res.json({ songs });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addSong
};
