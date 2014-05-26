'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', '$location', 'Global', function ($scope, $location, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
    }];


    $scope.isActive = function (viewLocation) {
        console.log('lior' + $location.path());
        return viewLocation === $location.path();
    };

    $scope.isCollapsed = false;

    $scope.openModal = function(modalID, event) {
        Global.modal.path = "views/dialogs/" + modalID + ".html";
        Global.modal.class = "open";

        event.stopPropagation();
    };
}]);