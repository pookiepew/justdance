module.exports = updateConnection = async (User, login, status, HttpError) => {
  try {
    const user = await User.findOneAndUpdate(
      { login },
      { shouldBeConnected: status },
      { new: true }
    );
    return user;
  } catch (err) {
    const error = new HttpError(
      'Updating user with connection info failed, please try again',
      400
    );
    throw error;
  }
};
