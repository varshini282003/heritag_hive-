// backend/models/Heritage.js
const mongoose = require("mongoose");

const HeritageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: {
    city: String,
    state: String,
  },
  description: String,
  images: [String], // Array of image filenames
  audio: String, // Audio filename
  additionalInfo: String,
});

const Heritage = mongoose.model("Heritage", HeritageSchema);
module.exports = Heritage;
