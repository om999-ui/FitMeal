const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  addMeal,
  getMeals,
  deleteMeal,
} = require("../controllers/mealController");

const router = express.Router();
router.post("/", protect, addMeal);
router.get("/", protect, getMeals);
router.delete("/:id", protect, deleteMeal);
module.exports = router;