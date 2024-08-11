const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// MongoDB connection
// MongoDB connection without deprecated options
mongoose.connect('mongodb+srv://samarthjaiswal30:jaiswal30@vassiwa.iszaery.mongodb.net/?retryWrites=true&w=majority&appName=Vassiwa');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Rest of your server code...



// Define routes
app.use('/api/companies', require('./routes/companies'));
app.use('/api/grievances', require('./routes/grievances'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/Login', require('./routes/Login'));

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

