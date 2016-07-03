(function () {
  'use strict';

  /* @ngdoc object
   * @name p2p
   * @description
   *
   */
  angular
    .module('p2p', [
      'ngAria',
      'ngMaterial',
      'ui.router',
      'home',
      'campaign',
      'checkout',
      // 'angularPayments',
      'campaignDetail',
      'signup'
    ]);
}());
