'use strict';

var packages = require('../controllers/packages');

// The Package is past automatically as first parameter
module.exports = function(Packages, app, auth, database) {

  app.get('/packages', packages.all);
  app.post('/packages', auth.requiresAdmin, packages.create);
  app.get('/packages/:packageId', packages.show);
  app.put('/packages/:packageId', auth.requiresAdmin, packages.update);
  // .delete(packages.destroy);

  // Finish with setting up the packageId param
  app.param('packageId', packages.package);
};
