const apiRoutes = require('./api-routes');
const crudRoutes = require('./crud-api');
const siteController = require('../app/controllers/SiteController')
function routes(app) {
  apiRoutes(app)
  crudRoutes(app)
  app.get('/admin', siteController.index);
}

module.exports = routes;
