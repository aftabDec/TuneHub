// backend/routes/songs.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/MiddleUpload');
const {
  createSong,
  getSongs,
  getSongById,
  updateSong,
  deleteSong,
} = require('../controller/SongController');
const songController = require('../controller/SongController');

router.post('/create', createSong);
router.post('/songs', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fileUrl', maxCount: 1 }]), songController.createSong);
router.put('/songs/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'fileUrl', maxCount: 1 }]), songController.updateSong);
router.get('/get', getSongs);
router.get('/:id', getSongById);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);

module.exports = router;
