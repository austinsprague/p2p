(function () {
  'use strict';

  angular
    .module('checkout')
    .config(config);

  function config($stateProvider, stripeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    stripeProvider.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    $stateProvider
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'checkout/views/checkout.tpl.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      });
  }
}());
