const partner = require('./partner');

route = (app) => {
  app.use('/partners', partner);
};

module.exports = route;
