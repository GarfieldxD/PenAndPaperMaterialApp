(function () {
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('pandp', ['ngMaterial']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/pandp/dice");
    $stateProvider
      .state('app.pandp', {
        abstract: true,
        views: {
          'sidenav@': {
            templateUrl: "modules/pandp/view/sidenav.html",
            controller: "sidenavController"
          },
          'content@': {
            template: "<div ui-view></div>",
          }
        }
      })
      .state('app.pandp.dice', {
        url: '/pandp/dice',
        views: {
          'content@': {
            templateUrl: "modules/pandp/view/dice.html",
            controller: "diceController"
          }
        }
      })
	   .state('app.pandp.inventory', {
        url: '/pandp/inventory',
        views: {
          'content@': {
            templateUrl: "modules/pandp/view/inventory.html",
            controller: "inventoryController"
          }
        }
      });
  });
})();
