// backend/middleware/upload.js
const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

// Check file type
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|m4a|png|mp3|wav/;
  // Check extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  // Allowed mimetypes
const mimetypes = /image\/jpeg|image\/jpg|audio\/x-m4a|image\/png|audio\/mpeg|audio\/wav|video\/mp4|video\/webm|audio\/mp4/;
  // Check mimetype
  const mimetype = mimetypes.test(file.mimetype);

  // Debugging logs to understand the issue
  console.log('File originalname:', file.originalname);
  console.log('File mimetype:', file.mimetype);
  console.log('File extension check:', extname);
  console.log('File mimetype check:', mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images and audio files only!');
  }
}

module.exports = upload;
