(function () {

  angular
    .module('pandp')
    .controller('diceController', ['$scope','sidenavService', pandpDiceController]);

  function pandpDiceController($scope,  sidenavService) {
    $scope.dice = {
     quantity : 2 
    };
    $scope.ToggleLeft = sidenavService.ToggleSidenav('left');
    $scope.dices = [
      { spots: 6 },
      { spots: 20 }
    ];
    $scope.throws = [];

    $scope.RollTheDice = rollTheDice;

    function rollTheDice() {
      $scope.throws=[];
      for (var i = 0; i < $scope.dice.quantity; i++) {
        $scope.throws.push({
          Position: i + 1,
          Value: Math.floor((Math.random() * $scope.dice.spots) + 1)
        });
      }
    }
  }

})();