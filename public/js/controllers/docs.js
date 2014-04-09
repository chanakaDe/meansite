'use strict';

angular.module('mean.system').controller('DocsController', ['$scope', '$window', '$location', '$anchorScroll', '$timeout',
  function($scope, $window, $location, $anchorScroll, $timeout) {
    // $scope.aceLoaded = function(_editor) {
    //   // Editor part
    //   var _session = _editor.getSession();
    //   var _renderer = _editor.renderer;

    //   // Options
    //   _editor.setReadOnly(true);
    //   _session.setUndoManager(new ace.UndoManager());
    //   _renderer.setShowGutter(false);

    //   //, maxLines: 'Infinity'


    //   // Events
    //   _editor.on("changeSession", function() {
    //   });
    //   _session.on("change", function() {
    //   });
    // };


    /////////





    //////
    $scope.resetSlide = function() {
      console.log('reset', $scope.view, $scope.slide);
      $scope.slide = false;
    };

    $scope.changeView = function(name, anchor) {
      console.log('in', $scope.view, $scope.slide, 'name', name);
      $scope.slide = false; //when with timeout initialize as false
      $scope.view = name;

      $timeout(function(name, anchor) {
        $scope.slide = true;
        console.log('here');
        /*  $location.hash(anchor);
        $anchorScroll(); - buggy scope wise*/
      }, 300);

    };
  }
]);