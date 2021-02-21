module.exports = addSongToStreamer = async (
  streamer,
  list,
  songId,
  axios,
  config
) => {
  if (!streamer || !list || !songId) {
    throw new Error('Streamer, list or songId not provided');
  }
  try {
    await axios.put(config.MONGO_URL + '/streamer/add-song');
  } catch (err) {
    throw err;
  }
};
