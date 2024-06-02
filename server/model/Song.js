// backend/models/Song.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  image:{
    type: String,
    
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  fileUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Song', songSchema);
