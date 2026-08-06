const Profile = require("../models/Profile");

// Get Profile
const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({
      user: req.user.id,
    });

    // Create default profile if none exists
    if (!profile) {
      profile = await Profile.create({
        user: req.user.id,
      });
    }

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create or Update Profile
const updateProfile = async (req, res) => {
  try {
    const {
      age,
      height,
      weight,
      gender,
      activityLevel,
    } = req.body;

    let profile = await Profile.findOne({
      user: req.user.id,
    });

    if (!profile) {
      profile = await Profile.create({
        user: req.user.id,
        age,
        height,
        weight,
        gender,
        activityLevel,
      });
    } else {
      profile.age = age;
      profile.height = height;
      profile.weight = weight;
      profile.gender = gender;
      profile.activityLevel = activityLevel;

      await profile.save();
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};