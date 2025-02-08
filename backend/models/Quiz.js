const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
