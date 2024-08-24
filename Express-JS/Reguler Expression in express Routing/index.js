const express = require("express");
const app = express();
const port = 3000;

app.get("/products/:id([0-9]+)", (req, res) => {
  res.send(`<h2> ID = ${req.params.id} </h2>`);
});


app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h2> Title = ${req.params.title} </h2>`);
});


app.use("*", (req,res) => {
    res.status(404).send({
        messsage: "not a valid route",
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
