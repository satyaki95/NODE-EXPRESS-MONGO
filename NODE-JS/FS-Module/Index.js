const { log } = require("console");
const fs = require("fs");

fs.writeFile("demo1.txt", "This is a text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});
fs.appendFile("demo1.txt", " my name is Satyaki", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File append");
  }
});
fs.readFile("demo1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File read");
    console.log(data); // Buffer Object if not use utf-8
  }
});
fs.rename("demo1.txt", "Demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File renamed");
  }
});
fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted");
  }
});
fs.exists("demo2.txt", (result) => {
  if (result) {
    console.log("File Found -->", result);
  } else {
    console.log("File not exists");
  }
});
var result = fs.existsSync('demo1.txt');
console.log("Sink -->", result);

