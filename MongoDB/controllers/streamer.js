const Streamer = require('../models/Streamer');

const HttpError = require('../utils/http-error');

const db = require('../db/index');

const createStreamer = async (req, res, next) => {
  const { login, refresh_token } = req.body;
  if (!login || !refresh_token) {
    const error = new HttpError('Streamer login or refresh token missing', 400);
    return next(error);
  }
  try {
    let streamer = await Streamer.findOne({ login });
    if (streamer) {
      const error = new HttpError('Streamer already exists!', 400);
      throw error;
    }
    streamer = await db.createNewStreamer(login, refresh_token, Streamer);
    res.status(201).json(streamer);
  } catch (err) {
    next(err);
  }
};

const getStreamer = async (req, res, next) => {
  const { login } = req.query;
  if (!login) {
    const error = new HttpError(
      'No streamer provided, please provide one',
      400
    );
    return next(error);
  }

  try {
    const streamer = await db.getStreamerData(login, Streamer);
    res.json(streamer);
  } catch (err) {
    const error = new HttpError(err || 'Getting streamer failed', 500);
    next(error);
  }
};

const addUser = async (req, res, next) => {
  const { login, _id } = req.body;
  if (!login || !_id) {
    const error = new HttpError('Streamer or id no provided', 400);
    return next(error);
  }
  try {
    const streamer = await db.findStreamer(login, Streamer);
    if (!streamer) {
      const error = new HttpError('No streamer found', 404);
      return next(error);
    }
    const updatedStreamer = await db.addUserToStreamer(streamer, _id);
    res.json(updatedStreamer);
  } catch (err) {
    next(err);
  }
};

const getRefreshToken = async (req, res, next) => {
  const { login } = req.query;
  if (!login) {
    const error = new HttpError('Login not provided', 400);
    return next(error);
  }
  try {
    const refresh_token = await db.findStreamerRefreshToken(login, Streamer);
    if (!refresh_token) {
      const error = new HttpError('Refresh token not found', 400);
      return next(error);
    }
    res.json({ refresh_token });
  } catch (err) {
    next(err);
  }
};

const getAllStreamers = async (req, res, next) => {
  try {
    const streamers = await Streamer.find();
    if (!streamers) {
      const error = new HttpError('No streamers found', 500);
      return next(error);
    }
    res.json(streamers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createStreamer,
  getStreamer,
  addUser,
  getRefreshToken,
  getAllStreamers
};
