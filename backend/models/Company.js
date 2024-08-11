const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  udyamId: { type: String, required: true },
  natureOfProduct: { type: String, required: true },
  screenshot: { type: String, required: true },
  password: { type: String, required: true }
});

// Hash password before saving
CompanySchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Company', CompanySchema);
