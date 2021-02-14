module.exports = addUserToStreamer = async (user, config, axios, HttpError) => {
  try {
    const { data } = await axios.post(
      config.MONGO_URL + '/streamer/add-user',
      user,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    return data;
  } catch (err) {
    const error = new HttpError(
      'Adding user to streamer failed, please try again',
      500
    );
    throw error;
  }
};
