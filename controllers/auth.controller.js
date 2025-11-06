exports.googleLogin = async (req, res) => {
  try {
    const { name, email, googleId } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const studentId = Math.random().toString(36).substring(2, 10).toUpperCase();

      user = new User({
        name,
        email,
        googleId,
        studentId,
      });

      await user.save();
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
