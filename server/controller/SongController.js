// backend/controllers/songController.js
const Song = require('../model/Song');
const upload = require('../middleware/MiddleUpload');

const createSong = async (req, res) => {
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fileUrl', maxCount: 1 }])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const songData = {
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate,
        image: req.files.image ? `/uploads/${req.files.image[0].filename}` : undefined,
        fileUrl: req.files.fileUrl ? `/uploads/${req.files.fileUrl[0].filename}` : undefined,
      };

      const song = new Song(songData);
      await song.save();
      res.status(201).json(song);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateSong = async (req, res) => {
  upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fileUrl', maxCount: 1 }])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const songData = {
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate,
        image: req.files.image ? `/uploads/${req.files.image[0].filename}` : req.body.image,
        fileUrl: req.files.fileUrl ? `/uploads/${req.files.fileUrl[0].filename}` : req.body.fileUrl,
      };

      const song = await Song.findByIdAndUpdate(req.params.id, songData, {
        new: true,
        runValidators: true,
      });

      if (!song) {
        return res.status(404).json({ message: 'Song not found' });
      }

      res.status(200).json(song);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSong,
  getSongs,
  getSongById,
  updateSong,
  deleteSong,
};
