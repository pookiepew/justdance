module.exports = getStreamerSongList = async (login, list, Streamer) => {
  if (!login || !list) throw new Error('Streamer or list no provided');
  try {
    const streamer = await Streamer.findOne({ login }).populate({
      path: 'songs',
      populate: '_id',
    });
    const songlist = streamer.songs.filter((song) => song.list === list);
    return songlist;
  } catch (err) {
    throw err;
  }
};
