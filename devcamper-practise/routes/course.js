const express = require("express");
const { getAllCourses, addCourse,getBootcampCourse } = require("../controllers/course");
const router = express.Router()


router.get("/courses", getAllCourses)
router.get("/bootcamps/:bootcampId/courses", getBootcampCourse)
router.post("/bootcamps/:bootcampId/addCourse", addCourse)
// router.post("/bootcamps/addCourse", addCourse)



module.exports = router;