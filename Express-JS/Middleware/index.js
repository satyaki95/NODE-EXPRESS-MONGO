const express = require("express");
const app = express();
const port = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("Middleware executed");
  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleWare);


app.use((req, res, next) => {
    res.send("404 not found");
})

app.use((err, req, res, next) => {
    res.status(500).send("Block");
})
// app.get("/", myMiddleWare, (req, res) => {
//     console.log("I am Home " + req.currentTime);
    
//   res.send("Hello World!");
// });

app.get("/", (req, res) => {
    console.log("I am Home " + req.currentTime);
    
  res.send("Hello World!");
});

// app.get("/about", myMiddleWare, (req, res) => {
//     console.log("I am About " + req.currentTime);
    
//   res.send("Hello World!");
// });

app.get("/about", (req, res) => {
    console.log("I am About " + req.currentTime);
    
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
