const express = require("express");
const router = express.Router();

const colorController = require("../../app/controllers/ColorController");

router.get("/", colorController.index);

module.exports = router;
