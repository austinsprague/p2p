(function () {
  'use strict';

  angular
    .module('campaignDetail')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('campaignDetail', {
        url: '/campaign-detail',
        templateUrl: 'campaign-detail/views/campaign-detail.tpl.html',
        controller: 'CampaignDetailCtrl',
        controllerAs: 'campaignDetail'
      });
  }
}());
