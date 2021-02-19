const User = require('../models/User');

const HttpError = require('../utils/http-error');

const db = require('../db/index');

const save = async (req, res, next) => {
  const { user, streamer } = req.body;

  if (!user || !streamer) {
    const error = new HttpError(
      'User or streamer not provided, please try again',
      400
    );
    return next(error);
  }

  try {
    const newUser = await db.saveUser(user, streamer, User, HttpError);

    return res.status(201).json(newUser);
  } catch (err) {
    const error = new HttpError('Saving user failed, please try again', 500);
    next(error);
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
    return res.json(users);
  } catch (err) {
    const error = new HttpError('Getting users failed, please try again', 500);
    return next(error);
  }
};

module.exports = {
  save,
  findByTwitchID,
  getAllUsers,
};
