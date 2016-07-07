(function () {
  'use strict';

  angular
    .module('campaignDetail')
    .config(config);

    function config($stateProvider, $httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('campaignDetail', {
        url: '/campaign-detail/:id',
        templateUrl: 'campaign-detail/views/campaign-detail.tpl.html',
        controller: 'CampaignDetailCtrl',
        controllerAs: 'campaignDetail'
      });
  }
}());
