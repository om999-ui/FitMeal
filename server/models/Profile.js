const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      default: 18,
    },

    height: {
      type: Number,
      default: 170,
    },

    weight: {
      type: Number,
      default: 70,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },

    activityLevel: {
      type: String,
      enum: [
        "Sedentary",
        "Light",
        "Moderate",
        "Active",
        "Very Active",
      ],
      default: "Moderate",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);