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


    var hash = $location.hash();
    var view = $location.path().replace('/docs/', '');

    view = (view!='/docs')?view:'getting-started';
    $scope.docs = {
      anchor: hash,
      view: 'views/docs/pages/' + view + '.html'
    }


    $("#docs .nav a").on('click', function (e) {

      // prevent default anchor click behavior
      e.preventDefault();


      // animate
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 60
      }, 300, "easeOutExpo");

    });
  }
]);