'use strict';

angular.module('mean.packages').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('packages', {
                url: '/packages',
                templateUrl: 'packages/views/list.html'
            })
            .state('create package', {
                url: '/packages/create',
                templateUrl: 'packages/views/update.html'
            })
            .state('view package', {
                url: '/packages/:packageId',
                templateUrl: 'packages/views/view.html'
            })
            .state('edit package', {
                url: '/packages/:packageId/edit',
                templateUrl: 'packages/views/update.html'
            });
    }
]);
