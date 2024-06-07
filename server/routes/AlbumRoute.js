const express = require('express');
const { createAlbum } = require('../controller/AlbumController');
// const {auth} = require('../server'); 

const router = express.Router();
console.log({ createAlbum });

router.route('/createAlbum').post(createAlbum);

module.exports = router;
