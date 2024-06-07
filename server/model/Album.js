const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
  releaseDate: { type: Date, required: true },
  coverImage: { type: String }, // URL to the cover image
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});

module.exports = mongoose.model('Album', albumSchema);
