const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    // const id = req.query.id;
    // const name = req.query.name;

    const {id, name} = req.query;
    res.send(`<h1>Student id is :${name}, ${id}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});