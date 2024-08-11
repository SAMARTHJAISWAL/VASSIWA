const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: company._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
