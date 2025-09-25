const Course = require("../model/course.model");
const User = require("../model/user.model");

// ---------------- CREATE COURSE ----------------
exports.createCourse = async (req, res) => {
  try {
    const { title, description, category, instructor, lessons, price, isPublished } = req.body;

    if (!title || !description || !category || !instructor) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    // Optional: verify instructor exists and has correct role
    const instructorExists = await User.findById(instructor);
    if (!instructorExists || instructorExists.userRole !== "instructor") {
      return res.status(400).json({ message: "Invalid instructor ID" });
    }

    const newCourse = await Course.create({
      title,
      description,
      category,
      // instructor,
      lessons: lessons || [],
      price: price || 0,
      isPublished: isPublished || false,
    });

    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (err) {
    console.error("Error creating course:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- UPDATE COURSE ----------------
exports.updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const updateData = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    Object.assign(course, updateData);
    await course.save();

    res.status(200).json({ message: "Course updated successfully", course });
  } catch (err) {
    console.error("Error updating course:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- DELETE COURSE ----------------
exports.deleteCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findByIdAndDelete(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error("Error deleting course:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- GET ALL COURSES ----------------
exports.getAllCourses = async (req, res) => {
  try {
    const { published } = req.query; // optional query: ?published=true
    const filter = {};

    if (published === "true") filter.isPublished = true;
    if (published === "false") filter.isPublished = false;

    const courses = await Course.find(filter)
      .populate("instructor", "userName userEmail")
      .populate("enrolledStudents", "userName userEmail");

    res.status(200).json({ message: "Courses fetched successfully", courses });
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ---------------- GET COURSE BY ID ----------------
exports.getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId)
      .populate("instructor", "userName userEmail")
      .populate("enrolledStudents", "userName userEmail");

    if (!course) return res.status(404).json({ message: "Course not found" });

    res.status(200).json({ message: "Course fetched successfully", course });
  } catch (err) {
    console.error("Error fetching course:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
