// models/Video.js
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    url: {
      type: String,
      required: true, // video storage URL (S3, Vimeo, etc.)
    },

    duration: {
      type: Number, // in seconds or minutes
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    subscriptionLevelRequired: {
      type: Number,
      default: 1, // 1 = Basic, 2 = Premium, etc.
    },

    order: {
      type: Number,
      default: 1, // sequence in the course
    },

    isFreePreview: {
      type: Boolean,
      default: false, // allow free users to watch previews
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
