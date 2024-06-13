// routes/playlistRoute.js
const express = require('express');
const { createPlaylist, deletePlaylist, getPlaylist }= require('../controller/playlistController');
const {auth} = require('../middleware/AuthMiddle');
const upload = require('../middleware/MiddleUpload'); 
const playlistController = require('../controller/playlistController');

const router = express.Router();
console.log({ createPlaylist, deletePlaylist });

router.post('/',  upload.fields([{ name: 'image', maxCount: 1 }]), createPlaylist);


// Handle DELETE request to delete a playlist by ID
router.delete('/:id',  deletePlaylist);

// Handle GET request to fetch all playlists
router.get('/', getPlaylist);

module.exports = router;