const express = require("express");
const mongoose = require("mongoose");

// DATABASE --> collections(table) --> document(records)

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Create product Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create product Model
const Product = mongoose.model("Products", productSchema);
// Connect Database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyDB");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/products",async (req, res) => {
  try {
    //Get  data from request body
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });
    const productData = await newProduct.save();

    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

app.listen(PORT, async () => {
  console.log(`server is runing http://localhost:${PORT}`);
  await connectDB();
});
