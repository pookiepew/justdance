const axios = require('axios');

const config = require('../utils/config');

const mongoDB = require('../mongoDB/index');

const getAll = async (req, res, next) => {
  try {
    const songs = await mongoDB.getAllSongs(axios, config);
    res.json({ songs });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll
};
