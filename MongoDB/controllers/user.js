const User = require('../models/user');

const HttpError = require('../utils/http-error');

const userIsValid = require('../functions/userIsValid');

const saveUser = require('../functions/saveUser');

const save = async (req, res, next) => {
  const twitchUser = req.body;

  if (!userIsValid(twitchUser)) {
    const error = new HttpError(
      'User object missing details, please try again',
      400
    );
    return next(error);
  }

  try {
    const user = await saveUser(twitchUser, User, HttpError);

    return res.status(201).json(user);
  } catch (err) {
    const error = new HttpError('Saving user failed, please try again', 500);
    return next(error);
  }
};

module.exports = save;
