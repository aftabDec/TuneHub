// routes/playlistRoute.js
const express = require('express');
const {  createPlaylist,
  getPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist, }= require('../controller/playlistController');
const {auth} = require('../middleware/AuthMiddle');
const upload = require('../middleware/MiddleUpload'); 
const playlistController = require('../controller/playlistController');

const router = express.Router();

router.post('/',  upload.fields([{ name: 'image', maxCount: 1 }]), createPlaylist);
router.get('/',  getPlaylists);
router.get('/:id', auth, getPlaylistById);
router.put('/:id', auth, updatePlaylist);
router.delete('/:id', auth, deletePlaylist);
module.exports = router;