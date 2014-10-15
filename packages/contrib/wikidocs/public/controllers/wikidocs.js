'use strict';

angular.module('mean.wikidocs').controller('WikidocsController', ['$scope', 'Global',
	function($scope, Global) {
		$scope.global = Global;
		$scope.wikiMenu = 'wikidocs/navigation';
		$scope.wikiPage = window.location.hash.replace('#!','');
		$scope.wikiTitle = decodeURIComponent(window.location.hash.replace('#!/wikidocs/',''));		
	}
]);
