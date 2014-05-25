'use strict';
angular.module('mean').controller('PackageController', ['$scope', '$routeParams', '$location', '$sce', 'Global','Packages',
    function($scope, $routeParams, $location, $sce, Global, Packages) {
        $scope.global = Global;

        $scope.all = function() {
            Packages.query(function(packages) {
                $scope.packages = packages;
            });
        };

        $scope.show = function() {
            if ($routeParams.packageId) {
                Packages.get({
                    packageId: $routeParams.packageId
                }, function(currentPackage) {
                    $scope.package = currentPackage;
                });
            } else {
                $scope.package = new Packages();
            }
            
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

        $scope.update = function() {
            var existingPackage = $scope.package;
            if(!existingPackage._id) {
                existingPackage.$save(function(response) {
                    $location.path('packages/' + response._id);
                });
            }
            else {
                existingPackage.$update(function() {
                    $location.path('packages/' + existingPackage._id);
                });
            }
        };

    }
]);
