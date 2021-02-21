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
      config.STREAMER_API_URL + '/create',
      { login, refresh_token },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    res.status(201).json(data);
  } catch (err) {
    const error = new HttpError(
      'Failed creating new streamer, please try again',
      500
    );
    next(error);
  }
};

const getStreamerData = async (req, res, next) => {
  const { login } = req.query;
  if (!login) {
    const error = new HttpError(
      'No streamer provided, please provide and try again',
      400
    );
    return next(error);
  }
  try {
    const { data } = await axios.get(
      config.STREAMER_API_URL + '/streamer-data?login=' + login
    );
    res.json(data);
  } catch (err) {
    const error = new HttpError(
      'Failed getting streamer data, please try again',
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
  createNewStreamer,
  getStreamerData,
  getAllUsers
};
