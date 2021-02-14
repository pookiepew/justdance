module.exports = getAllUsersByStreamer = async (
  streamer,
  Streamer,
  HttpError
) => {
  try {
    const { connectedUsers } = await Streamer.findOne({ streamer });
    return connectedUsers;
  } catch (err) {
    const error = new HttpError('Failed getting users, please try again', 500);
    throw error;
  }
};
