'use strict';

// User routes use users controller
var leads = require('../controllers/leads');

module.exports = function (app, passport, auth) {
  app.post('/leads', leads.create);
}
