module.exports = addUserToStreamer = async (user, Streamer, HttpError) => {
  try {
    if (!user) {
      const error = new HttpError('User not provided, please try again', 400);
      throw error;
    }

    const streamer = await Streamer.findOne({ streamer: user.streamer });

    let newStreamer;

    if (!streamer) {
      newStreamer = new Streamer({
        streamer: user.streamer,
        activeSongs: [],
        favoriteSongs: [],
        learningSongs: [],
        bannedSongs: [],
        queue: [],
        dancedToday: [],
        twitchChat: {
          isQueueOpen: false,
          songRequestMessage:
            '/me is requesting @' + user.streamer + ' to dance ',
          leaveQueueMessage:
            '/me ripped a song out of the queue! NotLikeThis The song was ',
          openQueueMessage:
            '/me is letting everyone know that queue is now open! Songs can be requested at https://www.',
          closeQueueMessage:
            'HeyGuys Queue is now closed! Better luck next time SeemsGood',
          queueAlreadyOpenMsg: 'The queue is already open fool cmonBruh',
          queueAlreadyClosedMsg:
            'The queue is already closed cmonBruh Do you wanna superclose it, like forever? NotLikeThis'
        },
        connectedUsers: []
      });

      newStreamer.connectedUsers.push({
        _id: user._id,
        display_name: user.display_name,
        profile_image_url: user.profile_image_url
      });

      await newStreamer.save();
    }

    return streamer || newStreamer;
  } catch (err) {
    throw err;
  }
};
