const Color = require("../models/Color");

class ColorController {
  /* ************* API ************ */
  indexAPI(req, res, next) {
    Color.find({})
      .then((color) => {
        res.json(color);
      })
      .catch(next);
  }
  /* ************* END API ************ */

  index(req, res, next) {
    Color.find({})
      .then((color) => {
        res.json(color);
      })
      .catch(next);
  }
}

module.exports = new ColorController();
