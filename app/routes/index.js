'use strict';

module.exports = function(app) {
    // Home route
    var index = require('../controllers/index');
    app.get('/', index.render);
    var docs = require('../controllers/docs');
    /*
	This is temporary until we can update to the newer version of mean
	*/

    app.get('/docs', function(req, res) {
        res.redirect('#!/docs');
    });

    app.get('/release-notes', function(req, res) {
        res.redirect('#!/release-notes');
    });
    app.get('/support', function(req, res) {
        res.redirect('#!/support');
    });

};
