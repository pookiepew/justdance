module.exports = getStreamerSongList = async (login, title, Streamer) => {
  if (!login) throw new Error('Streamer not provided');
  try {
    const streamer = await Streamer.findOne({ login }).populate({
      path: 'songlists',
      populate: 'songs',
    });
    if (title) {
      const songlist = streamer.songlists.filter(
        (song) => song.title === title
      );
      return songlist;
    }
    return streamer.songlists;
  } catch (err) {
    throw err;
  }
};
