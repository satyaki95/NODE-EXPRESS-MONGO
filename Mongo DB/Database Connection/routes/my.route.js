const express = require("express");
const { getProduct, postProduct } = require("../controllers/my.controller");
const router = express.Router();

router.get("/", getProduct);

router.post("/products", postProduct);

module.exports = router;
