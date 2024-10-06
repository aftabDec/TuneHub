// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/songsRoute');
const authRoutes = require('./routes/userRoute')
const playlistRoutes = require('./routes/playlistRoute');
const albumRoute = require('./routes/AlbumRoute')
const artistRoute = require('./routes/ArtistRoute')
const path = require('path');
const cookieParse = require('cookie-parser')
const fs = require('fs');
const jwt = require('jsonwebtoken'); 
const {auth} = require('./middleware/AuthMiddle')
require('dotenv').config();

const app = express();
dotenv.config();
app.use(cookieParse())


const port = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(bodyParser.json());


// handling cors policy
const corsOptions = {
    origin: 'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
   credentials: true,
   
}
app.use(cors(corsOptions))

// Ensuring the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}


// Serve static files from the uploads directory
app.use('/uploads', express.static(uploadsDir));



// Routes
app.use('/api/songs', songRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api', albumRoute);
app.use('/api', artistRoute);





const adminAuth = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access denied');
  }
  next();
};


// Admin Route
app.get('/admin', auth, adminAuth, (req, res) => {
  res.send('Welcome Admin');
});



// Database Connection
mongoose.connect(process.env.MONGO_URI, {

})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


