module.exports = saveUser = async (twitchUser, User, HttpError) => {
  const {
    login,
    twitch_id,
    display_name,
    profile_image_url,
    refresh_token
  } = twitchUser;

  try {
    const filter = { twitch_id };
    const update = {
      login,
      display_name,
      profile_image_url,
      refresh_token
    };
    const user = await User.findOneAndUpdate(filter, update, {
      upsert: true,
      new: true
    });
    return user;
  } catch (err) {
    const error = new HttpError(
      'Saving new user to DB failed, please try again',
      500
    );
    throw error;
  }
};
