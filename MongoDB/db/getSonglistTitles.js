module.exports = getSonglistTitles = async (login, Streamer) => {
  let titles = [];
  try {
    const streamer = await Streamer.findOne({ login });
    for (let i = 0; streamer.songlists.length > i; i++) {
      if (titles.includes(streamer.songlists[i].title)) return;
      titles.push(streamer.songlists[i].title);
    }
    return titles;
  } catch (err) {
    throw err;
  }
};
