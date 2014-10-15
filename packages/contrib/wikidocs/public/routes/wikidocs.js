'use strict';

angular.module('mean.wikidocs').config(['$stateProvider',
  function($stateProvider) {    
    $stateProvider.state('wikidocs home', {
      url: '/wikidocs/:page',
      templateUrl: 'wikidocs/views/index.html'
    });    
  }
]);
