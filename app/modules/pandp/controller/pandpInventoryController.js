(function () {

  angular
    .module('pandp')
    .controller('inventoryController', ['$scope', 'sidenavService','pandpFactory', pandpInventoryController]);

  function pandpInventoryController($scope,  sidenavService,pandpFactory) {
    $scope.ToggleLeft = sidenavService.ToggleSidenav('left');
    
    $scope.inventory = pandpFactory.inventory;
    
  }

})();
