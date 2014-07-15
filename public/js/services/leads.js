'use strict';

//Lead service used with REST
angular.module('mean.system').factory('Leads', function($resource){
	return $resource('leads');
});