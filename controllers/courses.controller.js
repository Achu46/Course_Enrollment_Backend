const Course = require("../models/course.model");

exports.registerCourse = async (req, res) => {
  try {
    console.log("✅ Course Details:", req.body);
    const { title, description, courseCode, duration, startDate, endDate } =
      req.body;

    // In this variable the data all stored and we pass this variable to save in DB
    const course = new Course({
      title,
      description,
      courseCode,
      duration,
      startDate,
      endDate,
    });

    // In this function the course code should be unique so the findOne() method is used to find out 
    const existingCourseCode = await Course.findOne({ courseCode });
    if (existingCourseCode) {
      console.log("Course code is already exists");
      return res.status(400).json({ message: "❌ Course code is already exists" });
    }

    await course.save();// it's an area to save the data into DB
    return res
      .status(200)
      .json({ message: "🍾 Courses inserted successfully" });
  } catch (err) {
    console.error("Error:", err.message);
    return res
      .status(500)
      .json({ message: "⚠️ Courses are not been inserted" });
  }
};
