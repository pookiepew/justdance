const axios = require('axios');

const config = require('../utils/config');

module.exports = updateConnection = async (login, status) => {
  try {
    const user = await axios.post(
      config.MONGO_URL + '/user/update-status',
      { login, status },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return user.data;
  } catch (err) {
    const error = new HttpError(
      'Updating user with connection info failed, please try again',
      400
    );
    throw error;
  }
};
