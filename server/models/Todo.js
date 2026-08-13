// models/Todo.js
// Yeh define karta hai ki ek "Todo" MongoDB me kaisa dikhega (Schema)

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title dena mandatory hai
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false, // Naya todo by default incomplete hoga
    },
  },
  {
    timestamps: true, // createdAt aur updatedAt automatically add ho jayenge
  }
);

module.exports = mongoose.model("Todo", todoSchema);
