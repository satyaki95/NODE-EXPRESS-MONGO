const express = require("express");
const body = require("body-parser");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`name = ${fullName}, age = ${age}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
