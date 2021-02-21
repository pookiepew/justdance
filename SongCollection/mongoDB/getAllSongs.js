module.exports = getAllSongs = async (axios, config) => {
  try {
    const {
      data: { songs }
    } = await axios.get(config.MONGO_URL + '/song');
    return songs;
  } catch (err) {
    throw err;
  }
};
