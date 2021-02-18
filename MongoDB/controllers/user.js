const User = require('../models/User');
const Streamer = require('../models/Streamer');

const HttpError = require('../utils/http-error');

const db = require('../functions/index');

const save = async (req, res, next) => {
  const twitchUser = req.body;

  if (!twitchUser) {
    const error = new HttpError(
      'A twitch user needs to be included, please try again',
      400
    );
    return next(error);
  }

  try {
    const user = await db.saveUser(twitchUser, User, HttpError);

    return res.status(201).json(user);
  } catch (err) {
    const error = new HttpError('Saving user failed, please try again', 500);
    return next(error);
  }
};

const findByTwitchID = async (req, res, next) => {
  const { twitch_id, streamer } = req.query;

  if (!twitch_id || !streamer) {
    const error = new HttpError(
      'Twitch ID or streamer was not found, please try again',
      401
    );
    return next(error);
  }

  try {
    const user = await db.findUserByTwitchID(
      twitch_id,
      streamer,
      User,
      HttpError
    );

    return res.json(user);
  } catch (err) {
    const error = new HttpError('Saving user failed, please try again', 500);
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (err) {
    const error = new HttpError('Getting users failed, please try again', 500);
    return next(error);
  }
};

const getAllUsersByStreamer = async (req, res, next) => {
  const { streamer } = req.query;
  if (!streamer) {
    const error = new HttpError('No streamer provided, please try again', 400);
    next(error);
  }
  try {
    const connectedUsers = await db.getAllUsersByStreamer(
      streamer,
      Streamer,
      HttpError
    );
    res.json(connectedUsers);
  } catch (err) {
    const error = new HttpError('Failed getting users, please try again', 500);
    next(error);
  }
};

const updateConnectionStatus = async (req, res, next) => {
  const { login, status } = req.body;

  if (!login || !status) {
    const error = new HttpError('Login and Status needs to be provided!', 400);
    return next(error);
  }

  try {
    const user = await db.updateConnection(User, login, status, HttpError);
    return res.json(user);
  } catch (err) {
    const error = new HttpError(
      'Updating status failed, please try again',
      500
    );
    return next(error);
  }
};
module.exports = {
  save,
  findByTwitchID,
  getAllUsers,
  updateConnectionStatus,
  getAllUsersByStreamer
};
