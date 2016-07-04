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

    vm.handler = StripeCheckout.configure({
      key: 'pk_test_9Xzf0OH6f3wkWjcUhMPh9vtD',
      image: '/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        console.log(token);
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        }
    });

    vm.button = function(e) {
    // Open Checkout with further options:
      handler.open({
        name: 'Demo Site',
        description: '2 widgets',
        zipCode: true,
        amount: 2000
      });
      e.preventDefault();
    };
  }
}());
