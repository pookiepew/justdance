const axios = require('axios');

const config = require('../utils/config');

const HttpError = require('../utils/http-error');

const getAllUsers = async (req, res, next) => {
  const { streamer } = req.query;
  try {
    const { data } = await axios.get(
      config.MONGODB_SERVICE_URL + '/user/all-by-streamer?streamer=' + streamer
    );
    res.json(data);
  } catch (err) {
    const error = new HttpError('Getting users failed, please try again', 500);
    next(error);
  }
};

module.exports = {
  getAllUsers
};
