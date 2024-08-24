const express = require("express");
const app = express();
const PORT = 3000;

app.get("/userId/:id/userName/:name", (req, res) => {
    // const id = req.params.id;
    // const name = req.params.name;
    const {id, name} = req.params;
    res.send(`<h1>Student id is :${name}, ${id}</h1>`);
})

// For Header

app.get("/", (req, res) => {
    const id = req.header("id");
    const name = req.header("name");
    res.send(`<h1>Student name is :${name}, id is :${id}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});