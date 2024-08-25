const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyDB");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  console.log(`server is runing http://localhost:${PORT}`);
  await connectDB();
});
