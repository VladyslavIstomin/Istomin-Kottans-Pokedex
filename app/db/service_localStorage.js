(function() {
	'use strict';

	angular.module('app').config(function (localStorageServiceProvider) {
		localStorageServiceProvider
			.setPrefix('todo')
			.setStorageType('localStorage')
			.setNotify(true, true)
	})
})();