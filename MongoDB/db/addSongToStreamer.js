module.exports = addSongToStreamer = async (login, list, _id, Streamer) => {
  try {
    const streamer = await Streamer.findOne({ login });
    if (!streamer) {
      throw new Error('No streamer found');
    }
    streamer.songs.push({ list, _id });
    const data = await streamer.save();
    return data;
  } catch (err) {
    throw err;
  }
};
