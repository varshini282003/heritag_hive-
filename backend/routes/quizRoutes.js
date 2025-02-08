const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();

// GET: Fetch all quiz questions
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all questions
    if (!quizzes || quizzes.length === 0) {
      return res.status(404).json({ message: "No quiz questions found." });
    }
    res.status(200).json(quizzes);
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    res.status(500).json({ message: "Failed to fetch quiz questions." });
  }
});

// POST: Submit quiz answers (optional)
router.post("/submit", (req, res) => {
  const { answers } = req.body;

  // Placeholder logic for evaluating answers
  res.status(200).json({ message: "Quiz answers submitted successfully." });
});

module.exports = router;
