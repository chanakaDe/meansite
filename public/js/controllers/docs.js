'use strict';

angular.module('mean.system').controller('DocsController', ['$scope', '$window',
    function($scope, $window) {
	$scope.height = $window.innerHeight-180;
	$scope.view = 'howitworks';
	$scope.changeView = function(name){
		$scope.view = name;
	}
}
]);