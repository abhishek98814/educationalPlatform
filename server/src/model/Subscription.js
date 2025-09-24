// models/Subscription.js
const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    durationInDays: {
      type: Number,
      required: true, // e.g. 30, 90, 365
    },

    features: [
      {
        type: String,
        trim: true,
      },
    ],

    level: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
