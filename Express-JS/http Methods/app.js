const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});
app.get("/about", (req, res) => {
  res.send("About");
  res.end();
});
app.post("/", (req, res) => {
  res.send("Post");
  res.end();
});
app.put("/", (req, res) => {
  res.send("Put");
  res.end();
});
app.delete("/", (req, res) => {
  res.send("delete");
  res.end();
});

module.exports = app;
