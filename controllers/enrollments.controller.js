const Enrollment = require("../models/enrollment.model");

exports.registerEnrollment = async (req, res) => {
  try {
    console.log("✅ Enrolled course:", req.body);
    const { student_id, course_id, enrollmentDate, status, grade } = req.body;

    const enroll = new Enrollment({
      student_id,
      course_id,
      enrollmentDate,
      status,
      grade,
    });

    await enroll.save();
    return res.status(200).json({ message: "🍾 Course Enrolled Successfully" });
  } catch (err) {
    console.error("❌ Internal Server Error:", err.message);
    return res
      .status(500)
      .json({ message: "⚠️ Internal server error", error: err.message });
  }
};
