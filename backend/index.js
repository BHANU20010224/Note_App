const User = require("./models/user.model");

require('dotenv').config();

const config = require("./config.json");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");


const app = express();

mongoose.connect(config.connectionString)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

console.log("ACCESS_TOKEN_SECRET is:", process.env.ACCESS_TOKEN_SECRET);

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

app.post("/create-account", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res.status(400).json({ error: true, message: "Full Name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: true, message: "Password is required" });
  }

  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  const user = new User({ fullName, email, password });
  await user.save();

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful",
  });
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
