const mongoose = require("mongoose");

// creating a schema for courses
const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  courseCode: { type: String, required: true, unique: true },
  duration: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
