// controllers/playlistController.js
const upload = require('../middleware/MiddleUpload');
const Playlist = require('../model/Playlist');

const createPlaylist = async (req, res) => {
  upload.fields([{ name: 'image', maxCount: 1 }])(req, res, async (err) => {
    if (err) {
      console.error('Error during file upload in PlaylistController:', err);
      return res.status(400).json({ error: err.message });
    }

    const { name, songs } = req.body;
    const image = req.files && req.files.image ? `/uploads/${req.files.image[0].filename}` : undefined;

    if (!name || !songs || !image) {
      return res.status(400).json({ error: "Please fill all form fields" });
    }

    try {
      const playlist = new Playlist({
        name,
        songs: songs.id.split(','), // Ensure songs are handled as an array
        image,
      });

      console.log('Playlist object created:', playlist);
      await playlist.save();
      console.log('Playlist saved to database');
      res.status(201).json(playlist);
    } catch (err) {
      console.error('Error creating playlist:', err);
      res.status(400).json({ error: 'Error creating playlist' });
    }
  });
};

const deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
    await playlist.remove();
    res.status(200).json({ message: 'Playlist removed' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting playlist' });
  }
};

const getPlaylist = async (req, res) => {
  try {
    const fetchPlaylist = await Playlist.find();
    res.status(200).json(fetchPlaylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPlaylist, createPlaylist, deletePlaylist };