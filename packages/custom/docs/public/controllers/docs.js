'use strict';

angular.module('mean.docs').controller('DocsController', ['$scope', 'Global', 'Docs',
  function($scope, Global, Docs) {
    $scope.global = Global;
    $scope.package = {
      name: 'docs'
    };
  }
]);
