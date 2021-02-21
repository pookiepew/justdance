module.exports = findStreamerRefreshToken = async (login, Streamer) => {
  if (!login) throw new Error('No login provided');
  try {
    const { refresh_token } = await Streamer.findOne({ login });
    return refresh_token;
  } catch (err) {
    throw err;
  }
};
