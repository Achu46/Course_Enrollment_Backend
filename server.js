require("dotenv").config();
const express = require("express");
const app = express();
const db=require("../backend/config/db");

app.use(express.json());
// app.use(db);

app.use((req, res) => {
  res.status(404).json({ message: "404 - Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`server runs at http://localhost:${process.env.PORT}`);
});
