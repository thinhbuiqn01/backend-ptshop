const productRouter = require('./products');
const colorRouter = require('./color');
const categoryRouter = require('./category');
const slideRouter = require('./slide');
const sizeRouter = require('./size');
const policyRouter = require('./policy');

function apiRoutes(app) {
  app.use('/api/products', productRouter);
  app.use('/api/color', colorRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/slide', slideRouter);
  app.use('/api/size', sizeRouter);
  app.use('/api/policy', policyRouter);
}

module.exports = apiRoutes;
