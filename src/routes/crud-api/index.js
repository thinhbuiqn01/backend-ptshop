const productRouter = require("./products");

function crudRoutes(app) {
  app.use("/products", productRouter);
}

module.exports = crudRoutes;
