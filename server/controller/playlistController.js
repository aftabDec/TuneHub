// controllers/playlistController.js
const Playlist = require('../model/Playlist');

exports.createPlaylist = async (req, res) => {
  const { name, songs } = req.body;
  try {
    const playlist = new Playlist({
      name,
      user: req.user.id,
      songs,
    });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: 'Error creating playlist' });
  }
};

exports.deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
    if (playlist.user.toString() !== req.user.id) {
      return res.status(403).json({ error: 'User not authorized' });
    }
    await playlist.remove();
    res.status(200).json({ message: 'Playlist removed' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting playlist' });
  }
};
