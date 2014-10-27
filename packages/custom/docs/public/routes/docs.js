'use strict';

angular.module('mean.docs').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('docs', {
      url: '/docs',
      templateUrl: 'docs/views/docs/docs.html'
    });
  }
]);
