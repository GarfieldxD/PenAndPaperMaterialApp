(function () {

  angular
    .module('pandp')
    .controller('inventoryController', ['$scope', 'pandpService','sidenavService', pandpInventoryController]);

  function pandpInventoryController($scope, pandpService, sidenavService) {
    $scope.ToggleLeft = sidenavService.ToggleSidenav('left');
  }

})();
