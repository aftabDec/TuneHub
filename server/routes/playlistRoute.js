// routes/playlistRoute.js
const express = require('express');
const { createPlaylist, deletePlaylist } = require('../controller/playlistController');
// const {auth} = require('../server'); 

const router = express.Router();
console.log({ createPlaylist, deletePlaylist });

router.route('/').post(createPlaylist);
router.route('/:id').delete( deletePlaylist);

module.exports = router;
