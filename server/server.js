require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const goalRoutes = require("./routes/goalRoutes");

const connectDB = require("./config/db");
const mealRoutes = require("./routes/mealRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/profile", profileRoutes);
// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 FitMeal API is running successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});