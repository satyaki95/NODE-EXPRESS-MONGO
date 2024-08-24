const products = require("../models/products.model");
const path = require("path");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProducts = (req, res) => {
  const name = req.body.name;
  const count = Number(req.body.count);
  const product = { name, count };
  products.push(product);
  res.status(200).json({
    status: true,
    products,
  });
};
