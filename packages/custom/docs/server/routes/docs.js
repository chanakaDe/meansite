'use strict';

// The Package is past automatically as first parameter
module.exports = function(Docs, app, auth, database) {

  app.get('/docs/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/docs/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/docs/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/docs/example/render', function(req, res, next) {
    Docs.render('index', {
      package: 'docs'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
