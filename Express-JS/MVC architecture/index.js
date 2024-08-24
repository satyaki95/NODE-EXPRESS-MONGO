const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
