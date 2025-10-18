require("dotenv").config();
const express = require("express");
const app = express();
require("../backend/config/db");
const userRoutes = require("../backend/routes/routes.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "404 - Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`🍾 server runs at http://localhost:${process.env.PORT}`);
});
