const express = require('express');
const router = express.Router();
const Grievance = require('../models/Grievance');

// Get all grievances
router.get('/', async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.json(grievances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Submit a grievance
router.post('/', async (req, res) => {
  const grievance = new Grievance({
    companyName: req.body.companyName,
    email: req.body.email,
    grievance: req.body.grievance,
  });

  try {
    const newGrievance = await grievance.save();
    res.status(201).json(newGrievance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
