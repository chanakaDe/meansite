'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Docs = new Module('docs');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Docs.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Docs.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Docs.menus.add({
    title: 'docs example page',
    link: 'docs example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Docs.aggregateAsset('css', 'docs.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Docs.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Docs.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Docs.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Docs;
});
