const mongoose = require("mongoose");

const pickupSchema = new mongoose.Schema({
  from: {
    type: String,
    required: [true, "Please Enter where are you in"],
  },
  to: {
    type: String,
    required: [true, "Please Enter where are you go"],
  },
  number: {
    type: Number,
    required: [true, "Please Enter your phone number"],
  },
  labour: {
    type: Number,
    required: [true, "Please Enter labour amount"],
  },
  flour: {
    type: Number,
    required: [true, "Please Enter flour number"],
  },
  radio: {
    type: String,
    required: [true, "Please Enter vehicles"],
  },
  date: {
    type: String,
    required: [true, "Please Enter date"],
  },
  time: {
    type: String,
    required: [true, "Please Enter time"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pickup", pickupSchema);