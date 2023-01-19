const express = require("express");
const router = express.Router();

const categoryController = require("../../app/controllers/CategoryController");

router.get("/", categoryController.indexAPI);

module.exports = router;
