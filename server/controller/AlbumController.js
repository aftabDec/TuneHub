
const Album = require('../model/Album')


const createAlbum = async (req,res) => {
      const { title, artist, songs, releaseDate, coverImage } = req.body;
    try {
        if (!title || !releaseDate) {
      return res.status(400).json({ error: 'Title, artist, and release date are required' });
      
    }

      const album = new Album({
      title,
      artist,
      songs,
      releaseDate,
      coverImage,
    });

    // Save album to the database
    await album.save();

    // Send success response
    res.status(201).json(album);
    } catch (error) {
          console.error(error);
    res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { createAlbum };