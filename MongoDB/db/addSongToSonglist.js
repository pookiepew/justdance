module.exports = addSongToSonglist = async (login, title, songId, Streamer) => {
  try {
    let streamer = await Streamer.findOne({ login });
    if (!streamer) {
      throw new Error('No streamer found');
    }
    const songlist = streamer.songlists.find(
      (songlist) => songlist.title === title
    );
    if (!songlist) {
      streamer.songlists.push({
        title: title,
        songs: [songId],
      });
    } else {
      const exists = songlist.songs.find((song) => song.toString() === songId);
      if (exists) throw new Error('Song id already added!');
      songlist.songs.push(songId);
    }

    streamer = await streamer.save();
    return streamer;
  } catch (err) {
    throw err;
  }
};
