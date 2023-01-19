const express = require("express");
const router = express.Router();

const addressController = require("../../app/controllers/AddressController");

router.get("/", addressController.indexAPI);

module.exports = router;
