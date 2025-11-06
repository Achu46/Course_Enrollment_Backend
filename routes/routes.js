const express = require("express");
const router = express.Router();

// Controllers
const {
  registerUser,
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

const { googleLogin } = require("../controllers/auth.controller");

// User routes
router.post("/register", registerUser);
router.post("/student-login", loginUsers);

// Course routes
router.post("/course-register", registerCourse);
router.get("/fetch-courses", getCourses);

// Enrollment routes
router.post("/course-enroll", registerEnrollment);
router.get("/enrolled-course/:studentId", getEnrolledCourse);
router.post("/google-login", googleLogin);

module.exports = router;
