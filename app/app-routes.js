(function () {
  'use strict';

  angular
    .module('p2p')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
