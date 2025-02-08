const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Submit a review
router.post("/api/reviews", async (req, res) => {
  const { name, email, place, rating, review } = req.body;

  if (!name || !email || !place || !rating || !review) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newReview = new Review({ name, email, place, rating, review });
    await newReview.save();
    res.status(201).json({ message: "Review successfully submitted!" });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Fetch all reviews for a specific place
router.get("/api/reviews/:place", async (req, res) => {
  const place = req.params.place;

  try {
    const reviews = await Review.find({ place });
    if (!reviews.length) {
      return res.status(404).json({ error: "No reviews found for this place" });
    }
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
