'use strict';
angular.module('mean').controller('PackageController', ['$scope', '$routeParams', '$location', '$sce', 'Global','Packages',
    function($scope, $routeParams, $location, $sce, Global, Packages) {
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
                youtubelink: this.youtubelink,
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

        $scope.getEmbedYTVideo = function(ytLink) {
            if(ytLink) {
                var video_id = "//www.youtube.com/embed/" + ytLink.split('v=')[1];
                var ampersandPosition = video_id.indexOf('&');
                if(ampersandPosition != -1) {
                  video_id = video_id.substring(0, ampersandPosition);
                }
                return $sce.trustAsResourceUrl(video_id);
            }
            return "";
        }

        $scope.update =  function() {
            var existingPackage = $scope.package;
            existingPackage.$update(function() {
                $location.path('packages/' + existingPackage._id);
            });
        };

    }
]);
