(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name signup.controller:SignupCtrl
   *
   * @description
   *
   */
  angular
    .module('signup')
    .controller('SignupCtrl', SignupCtrl);

  function SignupCtrl($state, stripe, $http) {
    var vm = this;

    vm.user = {};
    vm.createUser = function(user) {
      stripe.card.createToken({
        number: vm.user.ccnumber,
        cvc: vm.user.cvc,
        exp_month: vm.user.exp_month,
        exp_year: vm.user.exp_year
      }, stripeResponseHandler);

      function stripeResponseHandler(status, res) {
        vm.user.token = {token: res.id};
        $http.post('http://localhost:5000/api/signup', vm.user.token)
          .then(function(data){
            console.log(data);
          }, function (err) {
            console.log(err);
          });
        }
      }
    }
}());
