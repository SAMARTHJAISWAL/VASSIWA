const express = require('express');
const router = express.Router();
const multer = require('multer');
const Company = require('../models/Company');
const bcrypt = require('bcrypt');

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(file.originalname.toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('File upload only supports the following filetypes - ' + filetypes));
  }
});

// Registration route
router.post('/', upload.single('screenshot'), async (req, res) => {
  try {
    const { companyName, email, contactNumber, dateOfJoining, udyamId, natureOfProduct, password } = req.body;
    const company = new Company({
      companyName,
      email,
      contactNumber,
      dateOfJoining,
      udyamId,
      natureOfProduct,
      screenshot: req.file.path,
      password
    });
    await company.save();
    res.status(201).send(company);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
