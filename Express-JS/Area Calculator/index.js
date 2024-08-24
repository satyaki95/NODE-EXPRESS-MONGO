const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/view/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/view/triangle.html");
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h2>The area of the circle is = ${area}</h2>`);
});

app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of Triangle is = ${area}</h2>`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
