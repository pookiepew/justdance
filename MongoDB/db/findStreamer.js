module.exports = findStreamer = async (login, Streamer) => {
  if (!login) throw new Error('Login not provided');
  try {
    const streamer = await Streamer.findOne({ login });
    return streamer;
  } catch (err) {
    throw err;
  }
};
