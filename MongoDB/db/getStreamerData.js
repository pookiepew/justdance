module.exports = getStreamerData = async (login, Streamer) => {
  if (!login) throw new Error('No streamer login provided');
  try {
    const streamer = await Streamer.findOne({ login })
      .select('-refresh_token')
      .populate({
        path: 'users',
        select: 'display_name profile_image_url',
      })
      .populate({
        path: 'songs',
        populate: '_id',
      });

    return streamer;
  } catch (err) {
    throw new Error('Failed getting streamer, please try again');
  }
};
