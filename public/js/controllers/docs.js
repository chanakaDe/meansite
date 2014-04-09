'use strict';

angular.module('mean.system').controller('DocsController',
  ['$scope','$window','$location','$anchorScroll','$timeout',
  function( $scope, $window, $location, $anchorScroll,$timeout) {
    $scope.resetSlide = function(){
      console.log('reset',$scope.view,$scope.slide);
      $scope.slide = false;
    };

    $scope.changeView = function(name, anchor){
      console.log('in',$scope.view, $scope.slide, 'name',name);
      $scope.slide = false;//when with timeout initialize as false
      $scope.view = name;

      $timeout(function(name,anchor){
        $scope.slide=true;
        console.log('here');
      /*  $location.hash(anchor);
        $anchorScroll(); - buggy scope wise*/
      },300);

    };
  }
]);
