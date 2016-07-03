(function () {
  'use strict'

  angular
  .module('signup')
  .factory('SignupService', SignupService);

  function SignupService() {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    return {
      // createUser: function (user) {
      //   return $http.post('http://localhost:5000/api/signup', user).then(function(data) {
      //     return data;
      //   });
      //   $scope.user = {};
      //   $scope.createUser = function() {
      //     $http({
      //       method : 'POST',
      //       url : 'http://localhost:5000/api/signup',
      //       data : $scope.user
      //     });
      //     console.log($scope.user);
      //   }
      // }
    }
  }
}());
