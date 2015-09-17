(function () {
  'use strict';

  angular.module('pandp')
    .service('pandpService', ['$q', pandpService])
    .service('sidenavService', ['$q', '$mdUtil', '$mdSidenav', sidenavService]);

  function sidenavService($q, $mdUtil, $mdSidenav) {
    /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function () {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
      return debounceFn;
    }

    return {
      ToggleSidenav: buildToggler
    };
  };

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function pandpService($q) {
    var users = [];

    // Promise-based API
    return {
      loadAllUsers: function () {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
