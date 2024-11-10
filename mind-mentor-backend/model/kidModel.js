const mongoose = require("mongoose");

const kidSchema = new mongoose.Schema(
  {
    chessId: {
      type: String,
      unique: true,
    },
    kidPin: {
      type: Number,
    },

    firstName: {
      type: String,

      trim: true,
    },
    lastName: {
      type: String,

      trim: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    programs: {
      type: [String],
    },
    chessLevel: {
      type: String,
    },
    intention: {
      type: String,

      trim: true,
    },
    schoolName: {
      type: String,

      trim: true,
    },
    address: {
      type: String,

      trim: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Kid", kidSchema);
