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

  function SignupCtrl($state, SignupService, $http) {
    var vm = this;

    vm.user = {};
    vm.createUser = function(user) {
      $http({
          method : 'POST',
          url : 'http://localhost:5000/api/signup',
          data : vm.user
      });
      console.log(vm.user);
    }

  }
}());
