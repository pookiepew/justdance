const Streamer = require('../models/streamer');

const HttpError = require('../utils/http-error');

const db = require('../functions/index');

const getStreamer = async (req, res, next) => {
  const { streamer } = req.query;
  if (!streamer) {
    const error = new HttpError(
      'No streamer provided, please provide one',
      400
    );
    return next(error);
  }

  try {
    const data = await db.getStreamerData(streamer, Streamer);
    res.json(data);
  } catch (err) {
    const error = new HttpError(err || 'Getting streamer failed', 500);
    next(error);
  }
};

const addUser = async (req, res, next) => {
  const user = req.body;
  if (!user) {
    const error = new HttpError('User was not provided, please try again', 400);
    return next(error);
  }
  try {
    const data = await db.addUserToStreamer(user, Streamer, HttpError);
    res.json(data);
  } catch (err) {
    const error = new HttpError(
      'Adding user to streamer failed, please try again',
      500
    );
    next(error);
  }
};

module.exports = {
  getStreamer,
  addUser
};
