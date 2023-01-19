const Product = require("../models/Product");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
class ProductsController {
  /* ************* API ************ */

  //[GET] /products
  indexAPI(req, res, next) {
    Product.find({})
      .then((product) => res.json(product))
      .catch(next);
  }

  //[GET] /products/search
  searchAPI(req, res, next) {
    console.log(req.query.q);
    res.json([{ data: req.query.q }]);
  }

  //[GET] /products/:slug
  showAPI(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        res.json(product);
      })
      .catch(next);
  }

  //[GET] /products/create
  createAPI(req, res, next) {
    res.render("products/create");
  }

  //[POST] /products/store
  storeAPI(req, res, next) {
    console.log(req.body.image01);
    req.body.image01 = `https://raw.githubusercontent.com/trananhtuat/yolo-reactjs-ecommerce/main/src/assets/images/products/${req.body.image01}`;
    req.body.image02 = `https://raw.githubusercontent.com/trananhtuat/yolo-reactjs-ecommerce/main/src/assets/images/products/${req.body.image02}`;
    const product = new Product(req.body);
    product.save();

    res.send("success");
  }

  /* ************* END API ************ */

  //[GET] /products
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.render("products/product", {
          products: multipleMongooseToObject(products),
        });
      })
      .catch(next);
  }

  //[GET] /products/search
  search(req, res, next) {
    console.log(req.query.q);
    res.json([{ data: req.query.q }]);
  }
  // [GET] /products/:id/edit
  edit(req, res, next) {
    Product.findById(req.params.id)
      .then((product) => {
        console.log(req.params.id);
        res.render("products/edit", { product: mongooseToObject(product) });
      })
      .catch(next);
  }

  //[GET] /products/:slug
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        res.json(product);
      })
      .catch(next);
  }

  //[GET] /products/create
  create(req, res, next) {
    res.render("products/create");
  }

  //[POST] /products/store
  store(req, res, next) {
    console.log(req.body.image01);
    req.body.image01 = `https://raw.githubusercontent.com/trananhtuat/yolo-reactjs-ecommerce/main/src/assets/images/products/${req.body.image01}`;
    req.body.image02 = `https://raw.githubusercontent.com/trananhtuat/yolo-reactjs-ecommerce/main/src/assets/images/products/${req.body.image02}`;
    const product = new Product(req.body);
    product.save();

    res.send("success");
  }
}

module.exports = new ProductsController();
