const express = require("express");
const { getProduct, postProduct, getProductData, getSpasificProductData } = require("../controllers/my.controller");
const router = express.Router();

router.get("/", getProduct);

//Get Product  Data
router.get("/product", getProductData);
router.get("/product/:id", getSpasificProductData);
//Post  Product
router.post("/products", postProduct);

module.exports = router;
