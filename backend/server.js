// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Import Routes
const heritageRoutes = require("./routes/heritageRoutes");
const quizRoutes = require("./routes/quizRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

// Serve static files properly
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/audio", express.static(path.join(__dirname, "public/audio")));

// MongoDB Connection
const mongoURI = "mongodb://127.0.0.1:27017/heritagehivedb";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Corrected API Route Prefixes
app.use("/api/heritages", heritageRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/reviews", reviewRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
