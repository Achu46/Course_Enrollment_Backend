const mongoose = require("mongoose");

const enrollmentSchema = mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  enrollmentDate: { type: Date, default: Date.now() },
  status: {
    type: String,
    enum: ["active", "completed", "dropped"],
    default: "active",
  },
  grade: { type: String },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;
