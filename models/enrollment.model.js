const mongoose = require("mongoose");

const enrollmentSchema = mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId },
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
