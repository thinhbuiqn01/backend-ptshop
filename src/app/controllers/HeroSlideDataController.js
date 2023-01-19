const HeroSlideData = require("../models/HeroSlideData");

class HeroSlideDataController {
  /* ************* API ************ */
  indexAPI(req, res, next) {
    HeroSlideData.find({})
      .then((slide) => {
        res.json(slide);
      })
      .catch(next);
  }
  /* ************* END API ************ */

  index(req, res, next) {
    HeroSlideData.find({})
      .then((slide) => {
        res.json(slide);
      })
      .catch(next);
  }
}

module.exports = new HeroSlideDataController();
