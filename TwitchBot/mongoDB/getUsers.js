const axios = require('axios');

const config = require('../utils/config');

module.exports = getUsers = async HttpError => {
  try {
    const {
      data: { users }
    } = await axios.get(config.MONGO_URL + '/user/all');
    return users;
  } catch (err) {
    const error = new HttpError('Getting users failed, please try again', 500);
    throw error;
  }
};
