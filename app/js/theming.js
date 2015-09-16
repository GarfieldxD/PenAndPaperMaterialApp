(function () {    
  'use strict';
  
    angular.module('starterApp')
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .defaultIconSet("./content/svg/avatars.svg", 128)
                .icon("menu", "./content/svg/menu.svg", 24)
                .icon("share", "./content/svg/share.svg", 24)
                .icon("google_plus", "./content/svg/google_plus.svg", 512)
                .icon("hangouts", "./content/svg/hangouts.svg", 512)
                .icon("twitter", "./content/svg/twitter.svg", 512)
                .icon("phone", "./content/svg/phone.svg", 512);

            $mdThemingProvider.theme('default')
                .primaryPalette('brown')
                .accentPalette('red');

        });
})();