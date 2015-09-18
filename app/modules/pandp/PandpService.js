(function () {
  'use strict';

  angular.module('pandp')
    .factory('pandpFactory', pandpFactory)
    .service('sidenavService', ['$q', '$mdUtil', '$mdSidenav', '$log', sidenavService]);

  function sidenavService($q, $mdUtil, $mdSidenav, $log) {
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

  function pandpFactory() {
    var factory = {};
    factory.inventory = {
      Size: 4,
      Slots: [],
      ActualSize: function () {
        var size = this.Size;
        this.Slots.forEach(function (entry) {
          size += entry.Size;
        });
      }
    };

    factory.inventory.add = function (item) {
      factory.inventory.Slots.push({
        Name: item.Name,
        Size: (item.Size === undefined) ? 0 : item.Size,
        Weight: (item.Weight === undefined) ? 0 : item.Weight
      })
    }

    factory.inventory.add({
      Name: "Stein",
      Size: 0.5,
      Weight: 0.5
    });
    return factory;
  };

})();
