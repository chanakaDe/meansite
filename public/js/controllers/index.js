'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$http', 'Global',
    function($scope, $http, Global) {
        $scope.global = Global;
        var apiUrl = 'https://api.github.com/repos/linnovate/mean';
        $http.get(apiUrl).success(function(repo) {
            $scope.githubData = repo;
        });
        $http.get(apiUrl + '/tags').success(function(tags) {
            $scope.githubData.release = tags[0].name;
        });
        $http.get(apiUrl + '/commits').success(function(commits) {
            $scope.githubData.commitDate = commits[0].commit.committer.date;
        });

        // global modal close function
        Global.closeModal = function() {
            Global.modal.path = '';
            Global.modal.class = '';
        };
    }
]);
