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
      default: 1, // 1 = Basic, 2 = Standard, 3 = Premium
    },

    isActive: {
      type: Boolean,
      default: true, // to deactivate plans if needed
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
