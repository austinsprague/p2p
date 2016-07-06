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

  function SignupCtrl($state, SignupService, stripe, $http) {
    var vm = this;

    vm.user = {};
    vm.createUser = function(user) {
      stripe.card.createToken({
        number: vm.user.ccnumber,
        cvc: vm.user.cvc,
        exp_month: vm.user.exp_month,
        exp_year: vm.user.exp_year
      }, stripeResponseHandler);

      vm.insertUser = {
        first_name: vm.user.first_name,
        last_name: vm.user.last_name,
        address: vm.user.address,
        city: vm.user.city,
        state: vm.user.state,
        phone_num: vm.user.phone_num,
        background: vm.user.background,
        email: vm.user.email,
        pwd: vm.user.pwd,
        zip: vm.user.zip
        // token: vm.user.token
      }

      function stripeResponseHandler(status, res) {
        vm.insertUser.token = res.id;
        $http.post('http://localhost:5000/api/signup', vm.insertUser)
          .then(function(data){
            console.log('this is the data' + data);
          }, function (err) {
            console.log(err);
          });
        }
      }
    }
}());
