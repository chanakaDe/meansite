'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Packages = new Module('packages');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Packages.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Packages.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Packages.menus.add({
    title: 'packages example page',
    link: 'packages example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Packages.aggregateAsset('css', 'packages.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Packages.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Packages.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Packages.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Packages;
});
