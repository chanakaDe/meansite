'use strict';

var packages = require('../controllers/package');

module.exports = function(app) {

    app.get('/packages', packages.all);
    app.post('/packages', packages.create);
    app.get('/packages/:packageId', packages.show);
    app.put('/packages/:packageId', packages.update);
        // .delete(packages.destroy);

    // Finish with setting up the packageId param
    app.param('packageId', packages.package);
};
