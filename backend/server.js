require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { MONGODB_URI, JWT_SECRET } = process.env;
if (!MONGODB_URI || !JWT_SECRET) {
  console.error('MONGODB_URI and JWT_SECRET must be set. Copy .env.example to .env and fill them in.');
  process.exit(1);
}

// Uploaded ID screenshots are stored here (multer does not create the folder itself)
const UPLOAD_DIR = path.join(__dirname, 'uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve uploaded files
app.use('/uploads', express.static(UPLOAD_DIR));

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

// Routes
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/companies', require('./routes/companies'));
app.use('/api/grievances', require('./routes/grievances'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/Login', require('./routes/Login'));

// Error handler (invalid JSON, upload errors, ...)
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON body' });
  }
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
