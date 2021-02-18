module.exports = getStreamerData = async (streamer, Streamer) => {
  if (!streamer) throw new Error('No streamer provided');
  try {
    const data = await Streamer.findOne({ streamer })
      .populate({
        path: 'activeSongs'
      })
      .populate({ path: 'favoriteSongs' })
      .populate({ path: 'learningSongs' })
      .populate({ path: 'bannedSongs' })
      .populate({ path: 'queue' })
      .populate({ path: 'dancedToday' })
      .populate({
        path: 'connectedUsers',
        select: 'display_name profile_image_url'
      });
    return data;
  } catch (err) {
    throw new Error('Failed getting streamer, please try again');
  }
};
