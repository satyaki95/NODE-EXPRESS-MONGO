const { connectDB } = require("./models/my.model");
const productRouter = require("./routes/my.route");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
  });
});

app.listen(PORT, async () => {
  console.log(`server is runing http://localhost:${PORT}`);
  await connectDB();
});
