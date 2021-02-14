const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const getStreamerData = async (req, res, next) => {
  const { streamer } = req.query;

  if (!streamer) {
    const error = new HttpError(
      'No streamer provided, please provide one',
      400
    );
    return next(error);
  }

  try {
    const { data } = await axios.get(
      config.MONGODB_SERVICE_URL + '/streamer/get?streamer=' + streamer
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
  getStreamerData
};
