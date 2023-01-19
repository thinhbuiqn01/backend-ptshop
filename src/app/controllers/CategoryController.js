const Category = require("../models/Category");

class CategoryController {
  /* ************* API ************ */
  indexAPI(req, res, next) {
    Category.find({})
      .then((category) => {
        res.json(category);
      })
      .catch(next);
  }
  /* ************* END API ************ */

  index(req, res, next) {
    res.send('category')
  }
}

module.exports = new CategoryController();
