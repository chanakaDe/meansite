'use strict';

angular.module('mean.system').controller('DocsController',
  ['$scope', '$window','$location','$anchorScroll',
  function( $scope, $window, $location, $anchorScroll) {
//	$scope.height = $window.innerHeight ;
//  console.log($window.inner)
	  $scope.view = 'getting-started';
	  $scope.changeView = function(name, anchor){
      $location.hash(anchor);
      $scope.view = name;
      $anchorScroll();
	  }
  }
]);
