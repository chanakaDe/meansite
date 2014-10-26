'use strict';

angular.module('mean.system', ['mean-factory-interceptor']);

angular.module('mean.system').directive('stopEvent', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind(attr.stopEvent, function (e) {
                e.stopPropagation();
            });
        }
    }
});

angular.module('mean.system').directive('scrollSpy', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            var offset = parseInt(attr.scrollOffset, 10);
            if (!offset) offset = 10;
            elem.scrollspy({
                'offset': offset
            });
            scope.$watch(attr.scrollSpy, function () {
                $timeout(function () {
                    elem.scrollspy('refresh', {
                        'offset': offset
                    });
                }, 1);
            }, true);
        }
    };
});

angular.module('mean.system').directive('preventDefault', function () {
    return function (scope, element) {
        jQuery(element).click(function (event) {
            event.preventDefault();
        });
    };
});

angular.module('mean.system').directive('scrollTo', ['$window',
    function ($window) {
        return {
            restrict: 'AC',
            compile: function () {

                function scrollInto(elementId) {

                    if (!elementId) $window.scrollTo(0, 0);
                    //check if an element can be found with id attribute
                    var el = document.getElementById(elementId);

                    if (el) el.scrollIntoView();
                    //if (el) window.scrollBy(0,0);
                }

                return function (scope, element, attr) {
                    element.bind('click', function () {
                        scrollInto(attr.scrollTo);
                    });
                };
            }
        };
    }
]);

angular.module('mean.system').directive('minHeight', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return {'h': w.height(), 'w': w.width()};
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            if (newValue) {
                $('.content').css('min-height', newValue.h - 241);
            }
        }, true);
    }
});