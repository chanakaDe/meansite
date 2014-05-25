'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/articles', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        when('/docs', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/bower', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/cli', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/client', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/config', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/getting-started', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/grunt', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/npm', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/overview', {
            templateUrl: 'views/docs/docs.html'
        }).
        when('/docs/packages', {
            templateUrl: 'views/docs/docs.html'
        }).                                                        
        when('/docs/server', {
            templateUrl: 'views/docs/docs.html'
        }).        
         when('/support', {
            templateUrl: 'views/support/support.html'
        }).
        when('/release-notes', {
            templateUrl: 'views/releases/release.html'
        }).
        when('/test', {
            templateUrl: 'views/docs/test.html'
        }).
        when('/packages', {
            templateUrl: 'views/packages/list.html'
        }).
        when('/packages/create', {
            templateUrl: 'views/packages/update.html'
        }).
        when('/packages/:packageId', {
            templateUrl: 'views/packages/view.html'
        }).
        when('/packages/:packageId/edit', {
            templateUrl: 'views/packages/update.html'
        }).    
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
