const User = require("../models/user.model");

exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ message: "🍾 Data Inserted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "❌ Data is not Inserted" });
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
