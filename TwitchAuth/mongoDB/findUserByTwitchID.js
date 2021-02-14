module.exports = findUserByTwitchID = async (
  twitch_id,
  streamer,
  config,
  axios,
  HttpError
) => {
  try {
    const { data } = await axios.get(
      config.MONGO_URL +
        '/user/find?twitch_id=' +
        twitch_id +
        '&streamer=' +
        streamer
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
