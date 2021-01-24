module.exports = findUserByTwitchID = async (twitch_id, User, HttpError) => {
  try {
    const user = await User.findOne({ twitch_id });

    if (!user) {
      const error = new HttpError(
        'Did not find a user with that twitch ID, please try again',
        404
      );
      throw error;
    }

    return user;
  } catch (err) {
    throw err;
  }
};
