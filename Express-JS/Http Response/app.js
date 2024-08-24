const express = require("express");
const app = express();
const useRouter = require("./routes/users.route");

app.use("/api/user", useRouter);

app.use("/contact", (req, res) => {
  // res.status(200).json({
  //     message: "Welcome to the registration page",
  //     name: "Satyaki"
  // });
  // res.redirect("/login");
  res.statusCode = 200;

  res.sendFile(__dirname + "/views/contact.html");
});

app.use("/about", (req, res) => {
  res.statusCode = 200;
  res.cookie("name", "Satyaki");
  res.cookie("age", "30");
  res.clearCookie("name");
  res.append("id", "123456789");
  res.sendFile(__dirname + "/views/about.html");
  res.end();
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile(__dirname + "/views/error.html");
});

module.exports = app;
