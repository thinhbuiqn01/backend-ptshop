const Product = require("../models/Product");
const Category = require("../models/Category");

class SiteController {
  //[GET] /admin
  index(req, res, next) {
    res.render("home");
  }
}

module.exports = new SiteController();
