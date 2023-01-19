const Address = require("../models/Address");

class AddressController {
  /* ************* API ************ */

  index(req, res, next) {
    Address.find({})
      .then((address) => {
        res.json(address);
      })
      .catch(next);
  }

  /* ************* END API ************ */

  indexAPI(req, res, next) {
    Address.find({})
      .then((address) => {
        res.json(address);
      })
      .catch(next);
  }
}

module.exports = new AddressController();
