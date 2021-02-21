module.exports = addUserToStreamer = async (streamer, _id) => {
  try {
    streamer.users.push(_id);
    const updatedStreamer = await streamer.save();
    return updatedStreamer;
  } catch (err) {
    throw err;
  }
};
