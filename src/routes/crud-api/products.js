const express = require("express");
const router = express.Router();

const productController = require("../../app/controllers/ProductsController");


router.get("/create", productController.create);
router.post("/store", productController.store);
router.get('/:id/edit', productController.edit);
router.get("/search", productController.search);
router.get("/:slug", productController.show);
router.get("/", productController.index);



module.exports = router;
