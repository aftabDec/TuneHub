// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/songsRoute');
const authRoutes = require('./routes/userRoute')
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Ensuring the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files from the uploads directory
app.use('/uploads', express.static(uploadsDir));

// Routes
app.use('/api/songs', songRoutes);
// Routes
app.use('/api/auth', authRoutes);

// Middleware to check token and admin status
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send('No token, authorization denied');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Token is not valid');
  }
};

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
module.exports = {auth}