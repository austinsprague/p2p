(function () {
  'use strict';

  angular
    .module('p2p')
    .config(config)

  function config($urlRouterProvider, $httpProvider) {

    // .state('home', {
    //   url: '/home'
    // }

    $urlRouterProvider.otherwise('/home');
    $httpProvider.defaults.withCredentials = true;
  }
}());
