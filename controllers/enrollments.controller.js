const Enrollment = require("../models/enrollment.model");
const User = require("../models/user.model"); // ✅ Make sure this is imported

// ✅ Register Enrollment
exports.registerEnrollment = async (req, res) => {
  try {
    console.log("✅ Incoming enrollment:", req.body);

    const { student_id, course_id, enrollmentDate, status, grade } = req.body;

    // ✅ Convert student_id (studentId string) → actual User ObjectId
    const user = await User.findOne({ studentId: student_id });

    if (!user) {
      return res.status(404).json({ message: "Student not found" });
    }

    const enroll = new Enrollment({
      student_id: user._id, // ✅ Store ObjectId
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

// ✅ Fetch Enrolled Courses
exports.getEnrolledCourse = async (req, res) => {
  try {
    const studentIdentifier = req.params.studentId; // e.g. "STD1234"

    // ✅ Look up user by studentId field in DB
    const user = await User.findOne({ studentId: studentIdentifier });

    if (!user) {
      return res.status(404).json({ message: "Student not found" });
    }

    // ✅ Now fetch all enrollments by user._id
    const enrolledCourse = await Enrollment.find({
      student_id: user._id,
    })
      .populate("course_id")
      .populate("student_id");

    res.json(enrolledCourse);
  } catch (err) {
    console.error("❌ Error fetching enrolled courses:", err.message);
    res
      .status(500)
      .json({
        message: "⚠️ Failed to fetch enrolled course",
        error: err.message,
      });
  }
};
