const mongoose = require('mongoose');

const GrievanceSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  grievance: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Grievance', GrievanceSchema);
