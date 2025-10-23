const express = require("express");
const router = express.Router();
const {
  registerUser,
  // getUsers,
  loginUsers,
  getUsers,
} = require("../controllers/users.controller");
const {
  registerCourse,
  getCourses,
} = require("../controllers/courses.controller");
const {
  registerEnrollment,
  getEnrolledCourse,
} = require("../controllers/enrollments.controller");

// Routes
router.post("/register", registerUser);
// router.get("/users", getUsers);
router.post("/student-login", loginUsers);
router.post("/course-register", registerCourse);
router.get("/fetch-courses", getCourses);
router.post("/course-enroll", registerEnrollment);
router.get("/student-id", getUsers);
router.get("/enrolled-course", getEnrolledCourse);

module.exports = router;
