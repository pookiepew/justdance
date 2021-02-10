const { model, Schema } = require('mongoose');

const requiredString = { type: String, required: true };

const userSchema = new Schema(
  {
    login: requiredString,
    twitch_id: requiredString,
    display_name: requiredString,
    profile_image_url: requiredString,
    refresh_token: requiredString,
    streamer: requiredString,
    shouldBeConnected: { type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model('User', userSchema);
