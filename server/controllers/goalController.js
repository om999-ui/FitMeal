const Goal = require("../models/Goal");

// Get User Goal
const getGoal = async (req, res) => {
  try {
    let goal = await Goal.findOne({ user: req.user.id });

    // Create default goal if none exists
    if (!goal) {
      goal = await Goal.create({
        user: req.user.id,
      });
    }

    res.status(200).json({
      success: true,
      goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create or Update Goal
const updateGoal = async (req, res) => {
  try {
    const { calories, protein, carbs, fat } = req.body;

    let goal = await Goal.findOne({ user: req.user.id });

    if (!goal) {
      goal = await Goal.create({
        user: req.user.id,
        calories,
        protein,
        carbs,
        fat,
      });
    } else {
      goal.calories = calories;
      goal.protein = protein;
      goal.carbs = carbs;
      goal.fat = fat;

      await goal.save();
    }

    res.status(200).json({
      success: true,
      message: "Goals updated successfully",
      goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getGoal,
  updateGoal,
};