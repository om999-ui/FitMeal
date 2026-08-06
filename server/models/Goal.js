const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    calories: {
      type: Number,
      required: true,
      default: 2000,
    },

    protein: {
      type: Number,
      required: true,
      default: 120,
    },

    carbs: {
      type: Number,
      required: true,
      default: 250,
    },

    fat: {
      type: Number,
      required: true,
      default: 60,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);