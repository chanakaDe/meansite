'use strict';

var packages = require('../controllers/package');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {
    app.get('/packages', packages.all);
    app.post('/packages', authorization.requiresAdmin, packages.create);
    app.get('/packages/:packageId', packages.show);
    app.put('/packages/:packageId', authorization.requiresAdmin, packages.update);
        // .delete(packages.destroy);

    // Finish with setting up the packageId param
    app.param('packageId', packages.package);
};
