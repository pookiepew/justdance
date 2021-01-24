module.exports = findUserByTwitchID = async (
  twitch_id,
  config,
  axios,
  HttpError
) => {
  try {
    const user = await axios.get(
      config.MONGO_URL + '/user/find?twitch_id=' + twitch_id
    );
    return user.data;
  } catch (err) {
    const error = new HttpError(
      'Saving user to database failed, please try again',
      500
    );
    throw error;
  }
};
