const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const createNewStreamer = async (req, res, next) => {
  const { login, refresh_token } = req.body;
  if (!login || !refresh_token) {
    const error = new HttpError('Streamer login or refresh token missing', 400);
    return next(error);
  }
  try {
    const { data } = await axios.post(
      config.MONGODB_SERVICE_URL + '/streamer/create',
      { login, refresh_token },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const getStreamerData = async (req, res, next) => {
  const { login } = req.query;

  if (!login) {
    const error = new HttpError(
      'No streamer provided, please provide one',
      400
    );
    return next(error);
  }

  try {
    const { data } = await axios.get(
      config.MONGODB_SERVICE_URL + '/streamer/get?login=' + login
    );
    res.json(data);
  } catch (err) {
    const error = new HttpError(
      'Getting streamer data failed, please try again',
      500
    );
    next(error);
  }
};

module.exports = {
  createNewStreamer,
  getStreamerData
};
