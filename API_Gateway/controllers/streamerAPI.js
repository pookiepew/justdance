const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const getStreamerData = async (req, res, next) => {
  const { streamer } = req.query;
  if (!streamer) {
    const error = new HttpError(
      'No streamer provided, please provide and try again',
      400
    );
    return next(error);
  }
  try {
    const { data } = await axios.get(
      config.STREAMER_API_URL + '/streamer-data?streamer=' + streamer
    );
    res.json(data);
  } catch (err) {
    const error = new HttpError(
      'Failed getting streamer data, please try agauin',
      500
    );
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  const { streamer } = req.query;
  if (!streamer) {
    const error = new HttpError('No streamer provided, please try again', 400);
    next(error);
  }
  try {
    const { data } = await axios.get(
      config.STREAMER_API_URL + '/users?streamer=' + streamer
    );
    res.json(data);
  } catch (err) {
    const error = new HttpError('Failed getting users, please try again', 500);
    next(error);
  }
};

module.exports = {
  getStreamerData,
  getAllUsers
};
