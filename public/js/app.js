'use strict';

angular.module('mean', ['ui.ace','ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'hc.marked']);

angular.module('mean.system', []);
angular.module('mean.articles', []);

$(document).ready(function(){
	// close modal on Esc press
	$(document).keyup(function(event){
		if (event.keyCode == 27 && $('.close-dialog:visible').size()) {
			$('.close-dialog:visible').click();
		}
	});
});
