const express = require('express');
const app = express();
const useRouter = require('./routes/users.route');

app.use("/api/user",useRouter);


app.use((req, res) => {
    res.status(404).send("Page Not Found");
})

module.exports = app;