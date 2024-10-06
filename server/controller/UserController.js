

// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
require('dotenv').config();

// Environment variable for JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

exports.register = async (req, res) => {
  const { username, password, isAdmin } = req.body;
  try {
    const user = new User({ username, password, isAdmin });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send('Error registering user');
  }
};

exports.login = async (req, res) => {
  const { username, password, } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, isAdmin: user.isAdmin });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).send('Server error');
  }
};
