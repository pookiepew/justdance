const { model, Schema, Types } = require('mongoose');

const streamerSchema = new Schema(
  {
    login: { type: String },

    activeSongs: [
      {
        song: String,
        artist: String,
        year: String,
        mode: String,
        imageName: String,
        game: String,
        routine: String
      }
    ],

    favoriteSongs: [
      {
        song: String,
        artist: String,
        year: String,
        mode: String,
        imageName: String,
        game: String,
        routine: String
      }
    ],

    learningSongs: [
      {
        song: String,
        artist: String,
        year: String,
        mode: String,
        imageName: String,
        game: String,
        routine: String
      }
    ],

    bannedSongs: [
      {
        song: String,
        artist: String,
        year: String,
        mode: String,
        imageName: String,
        game: String,
        routine: String
      }
    ],

    queue: [
      {
        song: String,
        artist: String,
        year: String,
        mode: String,
        imageName: String,
        game: String,
        routine: String,
        requestedBy: String
      }
    ],

    dancedToday: [
      {
        song: String,
        artist: String,
        year: String,
        mode: String,
        imageName: String,
        game: String,
        routine: String
      }
    ],

    twitchChat: {
      isQueueOpen: Boolean,
      songRequestMessage: String,
      leaveQueueMessage: String,
      openQueueMessage: String,
      closeQueueMessage: String
    },

    connectedUsers: [
      {
        _id: { type: Types.ObjectId },
        display_name: String,
        profile_image_url: String,
        songMod: { type: Boolean, default: false }
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model('Streamer', streamerSchema);
