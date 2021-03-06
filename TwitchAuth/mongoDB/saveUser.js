module.exports = saveUser = async (twitchUser, config, axios, HttpError) => {
  try {
    const { data } = await axios.post(
      config.MONGO_URL + '/user/save',
      twitchUser,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return data;
  } catch (err) {
    const error = new HttpError(
      'Saving user to database failed, please try again',
      500
    );
    throw error;
  }
};
