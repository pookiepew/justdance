const { model, Schema, Types } = require('mongoose');

const requiredString = { type: String, required: true };

const userSchema = new Schema(
  {
    login: requiredString,
    twitch_id: requiredString,
    display_name: requiredString,
    profile_image_url: requiredString,
    refresh_token: requiredString,
    streamer: { type: Types.ObjectId, ref: 'Streamer' }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model('User', userSchema);
