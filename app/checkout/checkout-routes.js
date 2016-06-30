(function () {
  'use strict';

  angular
    .module('checkout')
    .config(config);

  function config($stateProvider) {
    window.Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    $stateProvider
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'checkout/views/checkout.tpl.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      });
  }
}());
