const express = require("express");
const {
  createVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  getVideosByCourse,
} = require("../controller/video.controller");

const router = express.Router();

router.post("/", createVideo);
router.get("/", getAllVideos);
router.get("/:id", getVideoById);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);
router.get("/course/:courseId", getVideosByCourse);

module.exports = router;
