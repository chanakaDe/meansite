'use strict';

angular.module('mean.system').factory('Leads', ['$resource',
  function($resource) {
      return $resource('leads');
  }
]);
