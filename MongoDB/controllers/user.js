const User = require('../models/user');

const HttpError = require('../utils/http-error');

const db = require('../functions/index');

const save = async (req, res, next) => {
  const twitchUser = req.body;

  if (!db.userIsValid(twitchUser)) {
    const error = new HttpError(
      'User object missing details, please try again',
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
  const { twitch_id } = req.query;

  if (!twitch_id) {
    const error = new HttpError(
      'Twitch ID was not found, please try again',
      401
    );
    return next(error);
  }

  try {
    const user = await db.findUserByTwitchID(twitch_id, User, HttpError);

    return res.json(user);
  } catch (err) {
    const error = new HttpError('Saving user failed, please try again', 500);
    return next(error);
  }
};

module.exports = { save, findByTwitchID };
