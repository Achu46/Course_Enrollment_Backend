const express = require("express");
const router = express.Router();
const {
  registerUser,
  // getUsers,
  loginUsers,
} = require("../controllers/users.controller");
const {
  registerCourse,
  getCourses,
} = require("../controllers/courses.controller");
const { registerEnrollment } = require("../controllers/enrollments.controller");

// Routes
router.post("/register", registerUser);
// router.get("/users", getUsers);
router.post("/student-login", loginUsers);
router.post("/course-register", registerCourse);
router.get("/fetch-courses", getCourses);
router.post("/course-enroll", registerEnrollment);

module.exports = router;
