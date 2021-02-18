const { model, Schema, Types } = require('mongoose');

const streamerSchema = new Schema(
  {
    login: { type: String },

    activeSongs: [{ type: Types.ObjectId, ref: 'Song' }],

    favoriteSongs: [{ type: Types.ObjectId, ref: 'Song' }],

    learningSongs: [{ type: Types.ObjectId, ref: 'Song' }],

    bannedSongs: [{ type: Types.ObjectId, ref: 'Song' }],

    queue: [{ type: Types.ObjectId, ref: 'Song' }],

    dancedToday: [{ type: Types.ObjectId, ref: 'Song' }],

    twitchChat: {
      isQueueOpen: Boolean,
      songRequestMessage: String,
      leaveQueueMessage: String,
      openQueueMessage: String,
      closeQueueMessage: String
    },

    connectedUsers: [{ type: Types.ObjectId, ref: 'User' }]
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model('Streamer', streamerSchema);
