# Course Enrollment Backend

This repository contains the **backend code** for a Course Enrollment System built with **Node.js, Express.js, and MongoDB**. It provides RESTful APIs to manage users, courses, and enrollments.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This backend project allows for:

- User registration and management (students, teachers, admins)
- Course creation and management
- Enrollment of students into courses
- Fetching enrollments with student and course details

It serves as the backend API for a course enrollment system that can be connected with a frontend application.

---

## Features

- RESTful API design
- MongoDB database integration
- User authentication and management (can be extended)
- Enrollment system with course-student relationships
- Easy to extend with additional features like assignments, payments, notifications

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ORM)  
- **Others:** dotenv (for environment variables), nodemon (for development)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/course_enrollment_backend.git
cd course_enrollment_backend
