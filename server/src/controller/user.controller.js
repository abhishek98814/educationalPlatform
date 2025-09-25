const User = require("../model/user.model");
const Course = require("../model/course.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

exports.createUser = async (req, res) => {
  try {
    const { userName, userEmail, userRole, userSubscriptionType, userPassword, userCourses } = req.body;

    if (!userName || !userEmail || !userRole || !userPassword) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists. Please provide a unique email" });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = await User.create({
      userName,
      userEmail,
      userRole,
      userSubscriptionType,
      userPassword: hashedPassword,
      userCourses: userCourses || [],
    });

    return res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    if (!userEmail || !userPassword) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ userEmail }).select("+userPassword").populate("userCourses", "title description category");
    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, role: user.userRole, email: user.userEmail },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.userName,
        email: user.userEmail,
        role: user.userRole,
        subscriptionType: user.userSubscriptionType,
        courses: user.userCourses,
      },
    });
  } catch (err) {
    console.error("Error logging in:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- ENROLL IN COURSE ----------------
exports.enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) return res.status(400).json({ message: "User ID and Course ID are required" });

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);
    if (!user || !course) return res.status(404).json({ message: "User or Course not found" });

    // Add course to user if not already enrolled
    if (!user.userCourses.includes(courseId)) {
      user.userCourses.push(courseId);
      await user.save();
    }

    // Add user to course's enrolledStudents if not already added
    if (!course.enrolledStudents) course.enrolledStudents = [];
    if (!course.enrolledStudents.includes(userId)) {
      course.enrolledStudents.push(userId);
      await course.save();
    }

    return res.status(200).json({ message: "User enrolled in course successfully" });
  } catch (err) {
    console.error("Error enrolling user:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- GET ALL USERS ----------------
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("userCourses", "title description category");
    if (!users || users.length === 0) return res.status(404).json({ message: "No users found" });

    return res.status(200).json({ message: "Success", users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
