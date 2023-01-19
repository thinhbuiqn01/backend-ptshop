const Policy = require("../models/Policy");

class PolicyController {
  /* ************* API ************ */
  indexAPI(req, res, next) {
    Policy.find({})
      .then((policy) => {
        res.json(policy);
      })
      .catch(next);
  }
  /* ************* END API ************ */

  index(req, res, next) {
    Policy.find({})
      .then((policy) => {
        res.json(policy);
      })
      .catch(next);
  }

}

module.exports = new PolicyController();
