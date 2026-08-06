const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
  getGoal,
  updateGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.get("/", protect, getGoal);

router.put("/", protect, updateGoal);

module.exports = router;