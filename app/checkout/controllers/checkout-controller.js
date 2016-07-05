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

  function CheckoutCtrl(stripe, $http) {
    var vm = this;
    vm.ctrlName = 'CheckoutCtrl';

    stripe.card.createToken({
      number: 4242424242424242,
      cvc: 123,
      exp_month: 12,
      exp_year: 17
      }, stripeResponseHandler);

    function stripeResponseHandler(status, res) {
      console.log('this is status' + status);
      console.log(res.id);
    }
  };

//     vm.stripeCallback = function (code, result) {
//     if (result.error) {
//       console.log(result.error);
//         // window.alert('it failed! error: ' + result.error.message);
//     } else {
//       console.log('this is code:' + code + 'and token: ' + result.id);
//         // window.alert('success! token: ' + result.id);
//     }
// };
  // }
}());
