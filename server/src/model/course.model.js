const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  // instructor: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  lessons: [
    {
      title: { type: String, required: true },
      videoUrl: { type: String },
      content: { type: String }, 
      duration: { type: Number }, 
    }
  ],
  price: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  enrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  isPublished: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
