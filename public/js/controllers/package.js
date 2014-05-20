'use strict';
angular.module('mean').controller('PackageController', ['$scope', '$routeParams', '$location', 'Global','Packages',
    function($scope, $routeParams, $location, Global, Packages) {
        $scope.global = Global;

        $scope.create = function() {
            var newPackage = new Packages({
                name: this.name,
                author: this.author,
                description: this.description,
                summary: this.summary,
                command: this.command,
                npmlink: this.npmlink,
                githublink: this.githublink,
                rating: this.rating,
                thumbnail: this.thumbnail,
                screenshots: this.screenshots,
                price: this.price,
            });
            newPackage.$save(function(response) {
                $location.path('packages/' + response._id);
            });
        };


        $scope.all = function() {
            Packages.query(function(packages) {
                $scope.packages = packages;
            });
        };

        $scope.show = function() {
            Packages.get({
                packageId: $routeParams.packageId
            }, function(currentPackage) {
                $scope.package = currentPackage;
            });
        };

        $scope.update =  function() {
            var existingPackage = $scope.package;
            existingPackage.$update(function() {
                $location.path('packages/' + existingPackage._id);
            });
        };

    }
]);
