const mongoose = require("mongoose");

// DATABASE --> collections(table) --> document(records)

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
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create product Model
exports.Product = mongoose.model("Products", productSchema);
// Connect Database
exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MyDB");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
