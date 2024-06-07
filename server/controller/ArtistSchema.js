
const artist = require('../model/Artist')


const createArtist = async (req,res) => {
      const { name, bio, albums, songs, followers } = req.body;
    try {
       if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

      const Artist = new artist({
      name,
      bio,
      songs,
      albums,
      followers,
    });

    // Save album to the database
    await Artist.save();

    // Send success response
    res.status(201).json(Artist);
    } catch (error) {
          console.error(error);
    res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { createArtist };