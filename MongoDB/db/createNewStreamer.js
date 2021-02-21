module.exports = createNewStreamer = async (login, refresh_token, Streamer) => {
  if (!login || !refresh_token)
    throw new Error('Login or refresh token missing');
  try {
    const streamer = new Streamer({
      login,
      songs: [],
      twitchChat: {
        isQueueOpen: false,
        songRequestMessage: '/me is requesting @pookiepew to dance ',
        leaveQueueMessage:
          '/me ripped a song out of the queue! NotLikeThis The song was ',
        openQueueMessage:
          '/me is letting everyone know that queue is now open! Songs can be requested at https://www.',
        closeQueueMessage:
          'HeyGuys Queue is now closed! Better luck next time SeemsGood'
      },
      users: [],
      refresh_token
    });
    await streamer.save();
    return streamer;
  } catch (err) {
    throw err;
  }
};
