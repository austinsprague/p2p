(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name nav.controller:NavCtrl
   *
   * @description
   *
   */
  // describe('Controller: NavCtrl', function() {
  //
  //   beforeEach(module('p2p'));
  //
  //   var NavCtrl,
  //       scope,
  //       location;
  //
  //   beforeEach(inject(funciton($controller, $rootScope, $location) {
  //     location = $location;
  //     scope = $rootScope.$new();
  //     NavCtrl = $controller('NavCtrl', {
  //       $scope: scope
  //     })
  //   }))
  //
  //
  //
  // })
  angular
    .module('nav')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl($scope, $state, $cookies) {
    $scope.isLoggedIn = function() {
      var sessionCookie= $cookies.get('session');
      if (sessionCookie == null || sessionCookie == undefined) {
        console.log('false');
        return false;
      }
      var parsedCookie = JSON.parse(atob(sessionCookie));
      console.log(parsedCookie);
      console.log(parsedCookie.passport.user.id);
      $scope.loggedIn = true;
      console.log('true');
      $scope.userId = parsedCookie.passport.user.id;
      $scope.userDisplayName = parsedCookie.passport.user.display_name;
      return true;
    }
  }
}());
