const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Company = require('../models/Company');

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    // Keep only a safe extension; never trust the original file name
    const ext = path.extname(file.originalname).toLowerCase().replace(/[^.a-z0-9]/g, '');
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('File upload only supports the following filetypes - jpeg, jpg, png, pdf'));
  }
});

// Turn multer errors into 400 responses instead of crashing/500
const handleUpload = (req, res, next) => {
  upload.single('screenshot')(req, res, (err) => {
    if (err) return res.status(400).json({ message: err.message });
    next();
  });
};

// Registration route (multipart/form-data)
router.post('/', handleUpload, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'A screenshot of the Udyam ID is required' });
    }
    const { companyName, email, contactNumber, dateOfJoining, udyamId, natureOfProduct, password } = req.body;
    const company = new Company({
      companyName,
      email,
      contactNumber,
      dateOfJoining,
      udyamId,
      natureOfProduct,
      screenshot: `uploads/${req.file.filename}`,
      password
    });
    await company.save();

    // Never send the password hash back
    const { password: _omit, ...saved } = company.toObject();
    res.status(201).json(saved);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'A company with this email is already registered' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router;
