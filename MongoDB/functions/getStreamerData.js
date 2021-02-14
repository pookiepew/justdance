module.exports = getStreamerData = async (streamer, Streamer) => {
  if (!streamer) throw new Error('No streamer provided');
  try {
    const data = await Streamer.findOne({ streamer });
    return data;
  } catch (err) {
    throw new Error('Failed getting streamer, please try again');
  }
};
