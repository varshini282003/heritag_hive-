// backend/routes/heritageRoutes.js
const express = require("express");
const router = express.Router();
const Heritage = require("../models/Heritage");

// GET all heritage sites
router.get("/", async (req, res) => {
  try {
    const heritageSites = await Heritage.find();
    res.json(heritageSites);
  } catch (error) {
    console.error("❌ Error fetching heritage sites:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ FIXED: GET specific heritage site (Case-insensitive)
router.get("/:name", async (req, res) => {
  try {
    const heritage = await Heritage.findOne({
      name: { $regex: new RegExp(`^${req.params.name}$`, "i") }, // Case-insensitive match
    });

    if (!heritage) {
      return res.status(404).json({ message: "Heritage site not found" });
    }
    res.json(heritage);
  } catch (error) {
    console.error("❌ Error fetching heritage site:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
