const { model, Schema } = require('mongoose');

const requiredString = { type: String, required: true };

const songSchema = new Schema(
  {
    title: requiredString,
    artist: requiredString,
    mode: requiredString,
    difficulty: String,
    effort: String,
    imageName: requiredString,
    largeImage: requiredString,
    mediumImage: requiredString,
    smallImage: requiredString,
    game: requiredString,
    routine: requiredString,
    year: String,
    video: String,
    active: Boolean
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model('Song', songSchema);
