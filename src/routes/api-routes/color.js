const express = require("express");
const router = express.Router();

const colorController = require("../../app/controllers/ColorController");

router.get("/", colorController.indexAPI);

module.exports = router;
