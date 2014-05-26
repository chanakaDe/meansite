'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$http', 'Global',
    function($scope, $http, Global) {
        $scope.global = Global;
        $http.jsonp('https://api.github.com/repos/linnovate/mean?callback=JSON_CALLBACK').success(function(repo) {
            $scope.githubData = repo.data;
				$http.jsonp(repo.data.tags_url + '?callback=JSON_CALLBACK').success(function(tags) {
					$scope.githubData.release = tags.data[0].name;
				});
        });

        $scope.closeModal = function() {
	        Global.modal.path = "";
	        Global.modal.class = "";
	    };
    }
]);
