const express = require("express");
const router = express.Router();

const sizeController = require("../../app/controllers/SizeController");

router.get("/", sizeController.indexAPI);

module.exports = router;
