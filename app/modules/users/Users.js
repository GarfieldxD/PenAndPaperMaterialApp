(function () {
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', ['ngMaterial']).config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/pandp");
    //
    // Now set up the states
    $stateProvider
      .state('users', {
        url: "/users",
        controller: "UserController",
        views: {
          'sidenav': {
            templateUrl: "modules/users/view/sidenav.html"
          },
          'content': {
            templateUrl: "modules/users/view/content.html",
          }
        }
      });
  });


})();
