'use strict';

angular.module('mean.packages').factory('Packages', ['$resource',
  function($resource) {
    return $resource('packages/:packageId', {
      packageId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);