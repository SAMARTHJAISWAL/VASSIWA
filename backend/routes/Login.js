const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Login route: { email, password } -> { token, company }
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const company = await Company.findOne({ email: String(email).toLowerCase().trim() });
    if (!company || !(await bcrypt.compare(password, company.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, company: { id: company._id, companyName: company.companyName, email: company.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
