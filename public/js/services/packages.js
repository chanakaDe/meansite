'use strict';

//Packages service used for packages REST endpoint
angular.module('mean').factory('Packages', ['$resource',
	function($resource) {
		return $resource('packages/:packageId', {
			packageId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
