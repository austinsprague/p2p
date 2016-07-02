(function () {
  'use strict';

  angular
    .module('campaign')
    .config(config);

  function config($stateProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('campaign', {
        url: '/campaign',
        templateUrl: 'campaign/views/campaign.tpl.html',
        controller: 'CampaignCtrl',
        controllerAs: 'campaign'
      })
  }
}());
