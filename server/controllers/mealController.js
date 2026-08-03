const Meal = require("../models/Meal");

// Add Meal
const addMeal = async (req, res) => {
  try {
    const meal = await Meal.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Meal added successfully",
      meal,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Meals
const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      meals,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Meal
const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!meal) {
      return res.status(404).json({
        success: false,
        message: "Meal not found",
      });
    }

    await meal.deleteOne();

    res.status(200).json({
      success: true,
      message: "Meal deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addMeal,
  getMeals,
   deleteMeal,
};