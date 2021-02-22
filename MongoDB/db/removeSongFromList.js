module.exports = removeSongFromList = async (
  login,
  title,
  songId,
  Streamer
) => {
  if (!login || !title || !songId)
    throw new Error('Login, title or song id not provided');
  try {
    let streamer = await Streamer.findOne({ login });

    const songlist = streamer.songlists.find((list) => list.title === title);

    if (!songlist) throw new Error('Songlist not found');

    const exists = songlist.songs.find((song) => song.toString() === songId);
    if (!exists) throw new Error('Song id not found');

    songlist.songs = songlist.songs.filter(
      (song) => song.toString() !== songId
    );

    streamer = await streamer.save();

    return streamer.songlists;
  } catch (err) {
    throw err;
  }
};
