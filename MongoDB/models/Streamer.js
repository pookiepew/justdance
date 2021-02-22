const { model, Schema, Types } = require('mongoose');

const streamerSchema = new Schema(
  {
    login: { type: String },

    songlists: [
      {
        title: { type: String, required: true },
        songs: [{ type: Types.ObjectId, ref: 'Song' }],
      },
    ],

    twitchChat: {
      isQueueOpen: Boolean,
      songRequestMessage: String,
      leaveQueueMessage: String,
      openQueueMessage: String,
      closeQueueMessage: String,
    },

    users: [{ type: Types.ObjectId, ref: 'User' }],
    refresh_token: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model('Streamer', streamerSchema);
