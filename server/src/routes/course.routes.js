const express = require("express")
const routes = express.Router()
const {createCourse, 
    // updateCourse, 
    // deleteCourse,
    //  getAllCourses, 
    //  getCourseById 
     } = require("../controller/course.controller")

routes.post("/coursecreate", createCourse)
// routes.patch("/updatecourse/:courseId", updateCourse) 
// routes.delete("/deletecourse/:courseId", deleteCourse) 
// routes.get("/allcourse", getAllCourses)
// routes.get("/course/:courseId", getCourseById) 


module.exports = routes;