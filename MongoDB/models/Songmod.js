const { model, Schema, Types } = require('mongoose');

const songmodSchema = new Schema(
  {
    users: [{ type: Types.ObjectId, ref: 'User' }]
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = model('Songmod', songmodSchema);
