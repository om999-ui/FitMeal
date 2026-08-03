const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
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

    activityLevel: {
      type: String,
      enum: [
        "Sedentary",
        "Lightly Active",
        "Moderately Active",
        "Very Active",
      ],
      default: "Sedentary",
    },

    goal: {
      type: String,
      enum: [
        "Lose Weight",
        "Maintain Weight",
        "Gain Weight",
      ],
      default: "Maintain Weight",
    },

    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);