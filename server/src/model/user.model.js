const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  userRole: {
    type: String,
    enum: ["admin", "instructor", "student"],
    default: "student",
  },
  userSubscriptionType: {
    type: String,
    enum: ["free", "premium", "pro"],
    default: "free",
  },
  userPassword: {
    type: String,
    required: true,
    select: false, 
  },
  userCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
