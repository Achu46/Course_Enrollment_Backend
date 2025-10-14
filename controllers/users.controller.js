const { User } = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, mobileNumber, gender, studentId } = req.body;

    // Basic validation
    if (
      !name ||
      !email ||
      !password ||
      !mobileNumber ||
      !gender ||
      !studentId
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check duplicates
    const existingUser = await User.findOne({
      $or: [{ email }, { mobileNumber }, { student_id: studentId }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({
          message: "User with same email, mobile, or student ID already exists",
        });
    }

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

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "error can't find the data", error: err.message });
  }
};
