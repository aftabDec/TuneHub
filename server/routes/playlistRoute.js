// routes/playlistRoute.js
const express = require('express');
const { createPlaylist, deletePlaylist } = require('../controller/playlistController');
const {auth} = require('../server'); 

const router = express.Router();

router.post('/', auth, createPlaylist);
router.delete('/:id', auth, deletePlaylist);

module.exports = router;
