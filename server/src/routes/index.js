const partner = require('./partner');
const news = require('./new');

route = (app) => {
  app.use('/partners', partner);
  app.use('/news', news);
};

module.exports = route;
