const express = require('express');
const mongoose = require('mongoose');
const heritageRoutes = require('./routes/heritageRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const quizRoutes = require('./routes/quizRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/heritageHive', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Use the routes
app.use('/api', heritageRoutes);
app.use('/api', reviewRoutes);
app.use('/api', quizRoutes);

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
