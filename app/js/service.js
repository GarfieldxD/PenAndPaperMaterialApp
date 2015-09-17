(function () {
  'use strict';
  angular
    .module('app')
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
  }



})();