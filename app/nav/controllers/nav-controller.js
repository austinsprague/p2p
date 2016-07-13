(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name nav.controller:NavCtrl
   *
   * @description
   *
   */
  angular
    .module('nav')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl() {
    var vm = this;
    vm.ctrlName = 'NavCtrl';
  }
}());
