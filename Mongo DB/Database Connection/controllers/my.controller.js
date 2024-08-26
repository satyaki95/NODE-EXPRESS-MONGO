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

exports.getProductData = async (req, res) => {
  try {
    Product.find()
      .limit(2)
      .then((productData) => {
        if (productData) {
          res.status(200).send(productData);
        } else {
          res.status(404).send({
            message: "No product found",
          });
        }
      });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};

exports.getSpasificProductData = async (req, res) => {
  try {
    const id = req.params.id;

    await Product.findOne({_id: id}).then((productData) => {
      if (productData) {
        res.status(200).send(productData);
      } else {
        res.status(404).send({
          message: "No product found",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
};
