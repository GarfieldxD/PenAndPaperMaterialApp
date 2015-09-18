(function () {

	angular
		.module('pandp')
		.controller('sidenavController', ['$scope',  'sidenavService', pandpInventoryController]);

	function pandpInventoryController($scope,  sidenavService) {
		$scope.ToggleLeft = sidenavService.ToggleSidenav('left');
	}

})();
