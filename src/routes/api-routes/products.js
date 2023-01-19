const express = require("express");
const router = express.Router();

const productController = require("../../app/controllers/ProductsController");

router.get("/create", productController.createAPI);
router.post("/store", productController.storeAPI);
router.get("/search", productController.searchAPI);
router.get("/:slug", productController.showAPI);
router.get("/", productController.indexAPI);

module.exports = router;
