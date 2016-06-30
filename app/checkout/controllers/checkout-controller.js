(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name checkout.controller:CheckoutCtrl
   *
   * @description
   *
   */
  angular
    .module('checkout')
    .controller('CheckoutCtrl', CheckoutCtrl);

  function CheckoutCtrl() {
    var vm = this;
    vm.ctrlName = 'CheckoutCtrl';
  }
}());
