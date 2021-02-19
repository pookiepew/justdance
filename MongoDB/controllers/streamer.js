const Streamer = require('../models/Streamer');

const HttpError = require('../utils/http-error');

const db = require('../db/index');

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

module.exports = {
  getStreamer,
};
