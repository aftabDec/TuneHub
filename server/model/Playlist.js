// models/Playlist.js
const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song',
  }],
  image: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
