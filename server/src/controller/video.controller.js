// controllers/videoController.js
const Video = require("../model/video");
const Course = require("../model/course.model");

// ---------------- CREATE VIDEO ----------------
exports.createVideo = async (req, res) => {
  try {
    const { title, description, url, duration, courseId, subscriptionLevelRequired, order, isFreePreview } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    const video = new Video({
      title,
      description,
      url,
      duration,
      course: course._id,
      subscriptionLevelRequired: subscriptionLevelRequired || 1,
      order: order || 1,
      isFreePreview: isFreePreview || false,
    });

    await video.save();

    // Add video to course's videos array
    course.videos.push(video._id);
    await course.save();

    res.status(201).json({ success: true, message: "Video created successfully", data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- GET ALL VIDEOS ----------------
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("course").sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- GET VIDEO BY ID ----------------
exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("course");

    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    res.status(200).json({ success: true, data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- UPDATE VIDEO ----------------
exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    res.status(200).json({ success: true, message: "Video updated successfully", data: video });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- DELETE VIDEO ----------------
exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    // Remove video from course's videos array
    await Course.findByIdAndUpdate(video.course, { $pull: { videos: video._id } });

    res.status(200).json({ success: true, message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ---------------- GET VIDEOS BY COURSE ----------------
exports.getVideosByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const videos = await Video.find({ course: courseId }).sort({ order: 1 });
    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
