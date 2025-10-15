const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUsers,
  loginUsers,
} = require("../controllers/users.controller");

// Routes
router.post("/register", registerUser);
router.get("/users", getUsers);
router.post("/student-login", loginUsers);

module.exports = router;
