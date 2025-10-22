const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateStudentId = () => {
  return [...Array(8)]
    .map(
      () =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)]
    )
    .join("");
};

exports.registerUser = async (req, res) => {
  try {
    console.log("📦 Received body:", req.body);
    const { name, email, password, mobileNumber, gender } = req.body;

    if (!name || !email || !password || !mobileNumber || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let studentId;
    let existingUser;
    do {
      studentId = generateStudentId();
      existingUser = await User.findOne({ student_id: studentId });
    } while (existingUser);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      name,
      email,
      password: hashedPassword,
      mobileNumber,
      gender,
      student_id: studentId,
    };

    const user = new User(userData);
    const savedUser = await user.save();

    // Return user without password
    const userResponse = {
      name: savedUser.name,
      email: savedUser.email,
      mobileNumber: savedUser.mobileNumber,
      gender: savedUser.gender,
      student_id: savedUser.student_id,
    };

    res
      .status(200)
      .json({ message: "🍾 Data Inserted Successfully", user: userResponse });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "❌ Data is not Inserted", error: err.message });
  }
};

// for testing purpose
exports.getUsers = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email }, "student_id");
    if (!user) return res.status(404).json({ message: "Student is not found" });
    res.json({ studentId: user.student_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login with authentication(JWT) & password compare
exports.loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "invalid email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Password mismatch" });

    const token = await jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    console.log("🍾 Logged in Token:", token);
    res.json({
      token,
      name: user.name,
      email: user.email,
      studentId: user.student_id,
    });
  } catch (err) {
    console.error("Error: ", err.message);
    res.status(500).json({ message: "Internal Server error" });
  }
};
