const Size = require("../models/Size");

class SizeController {
  /* ************* API ************ */

  indexAPI(req, res, next) {
    Size.find({})
      .then((size) => {
        res.json(size);
      })
      .catch(next);
  }
  /* ************* END API ************ */
  index(req, res, next) {
    Size.find({})
      .then((size) => {
        res.json(size);
      })
      .catch(next);
  }
}

module.exports = new SizeController();
