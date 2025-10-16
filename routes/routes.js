const express = require("express");
const router = express.Router();
const {
  registerUser,
  // getUsers,
  loginUsers,
} = require("../controllers/users.controller");
const { registerCourse } = require("../controllers/courses.controller");

// Routes
router.post("/register", registerUser);
// router.get("/users", getUsers);
router.post("/student-login", loginUsers);
router.post("/course-register", registerCourse);

module.exports = router;
