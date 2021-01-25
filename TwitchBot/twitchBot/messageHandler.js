module.exports = messageHandler = (channel, tags, message, self) => {
  if (self || tags['message-type'] === 'whisper') return;
  console.log(channel, message);
};
