const express = require('express');
const { createArtist } = require('../controller/ArtistSchema');
// const {auth} = require('../server'); 

const router = express.Router();
console.log({ createArtist });

router.route('/createArtist').post(createArtist);

module.exports = router;
