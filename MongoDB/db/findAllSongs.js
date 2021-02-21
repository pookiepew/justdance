module.exports = findAllSongs = async Song => {
  try {
    const songs = await Song.find();
    return songs;
  } catch (err) {
    throw err;
  }
};
