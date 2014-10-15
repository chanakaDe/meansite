'use strict';

var Module = require('meanio').Module;

var Wikidocs = new Module('wikidocs');

Wikidocs.register(function(app, auth, database) {



  Wikidocs.routes(app, auth, database);

  //We enable routing. By default the Package Object is passed to the routes

  return Wikidocs;
});
