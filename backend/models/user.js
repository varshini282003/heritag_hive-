const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add more fields if needed
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
