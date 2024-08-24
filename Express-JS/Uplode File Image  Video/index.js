const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;

//Multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uplodes/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/register",upload.single('image'), (req, res) => {
  res.status(200).send("Image Uploded");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
