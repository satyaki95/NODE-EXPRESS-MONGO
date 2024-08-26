const { Product } = require("../models/my.model");

exports.getProduct = (req, res) => {
  res.send("Hello World!");
};

exports.postProduct = async (req, res) => {
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
};
