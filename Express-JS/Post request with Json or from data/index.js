const express = require("express");
const bodyPaarser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyPaarser.urlencoded({ extended: false }));
app.use(bodyPaarser.json());

app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Welcome ${name} your age is ${age}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
