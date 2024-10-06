// controllers/playlistController.js
const upload = require('../middleware/MiddleUpload');
const Playlist = require('../model/Playlist');
const createPlaylist = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    upload.fields([{ name: 'image', maxCount: 1 }])(req, res, async (err) => {
      if (err) {
        console.error('Error during file upload in PlaylistController:', err);
        return res.status(400).json({ error: err.message });
      }

      const { name, description, songs } = req.body;
      const playlist = new Playlist({
        name,
        description,
        user: req.user._id,
        songs,
      });

      await playlist.save();
      res.status(201).json(playlist);
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all playlists for the logged-in user
const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.findById(req.params.id);
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific playlist by ID
const getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('songs');
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update a playlist
const updatePlaylist = async (req, res) => {
    upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { name, description, songs } = req.body;
    try {
      const playlist = await Playlist.findById(req.params.id);
      if (!playlist) {
        return res.status(404).json({ message: 'Playlist not found' });
      }

      if (playlist.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }

      playlist.name = name || playlist.name;
      playlist.description = description || playlist.description;
      playlist.songs = songs || playlist.songs;
      playlist.coverImage = req.file ? req.file.path : playlist.coverImage;

      await playlist.save();
      res.status(200).json(playlist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })
  ;
};
// Delete a playlist
const deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }

    if (playlist.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await playlist.remove();
    res.status(200).json({ message: 'Playlist removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Other controllers...

module.exports = {
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
};