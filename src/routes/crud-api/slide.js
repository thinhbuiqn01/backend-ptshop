const express = require("express");
const router = express.Router();

const slideController = require("../../app/controllers/HeroSlideDataController");

router.get("/", slideController.index);

module.exports = router;
