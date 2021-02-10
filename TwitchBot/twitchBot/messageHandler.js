module.exports = messageHandler = async (
  client,
  channel,
  tags,
  message,
  self
) => {
  if (self || tags['message-type'] === 'whisper') return;
  if (message === '!dance') {
    await client.say(
      channel,
      'blobDance Dance bongoTap Dance catJAM blobDance bongoTap Dance catJAM blobDance bongoTap blobDance Dance bongoTap Dance catJAM blobDance bongoTap Dance catJAM blobDance bongoTap blobDance Dance bongoTap Dance catJAM blobDance bongoTap Dance catJAM blobDance bongoTap blobDance Dance bongoTap Dance catJAM blobDance bongoTap Dance catJAM blobDance bongoTap blobDance Dance bongoTap Dance catJAM blobDance bongoTap Dance catJAM blobDance bongoTap blobDance Dance bongoTap Dance'
    );
  }
  console.log({
    channel,
    tags,
    message,
    self
  });
};
