angular.module('mean.system').controller('GoToController', ['$scope', 'Global', '$location', '$anchorScroll', function ($scope, Global, $location, $anchorScroll) {
    $scope.global = Global;
    $scope.goto = function(elementId) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(elementId);
        // call $anchorScroll()
        $anchorScroll();
    };
}]);