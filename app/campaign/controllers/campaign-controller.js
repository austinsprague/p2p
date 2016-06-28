(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name campaign.controller:CampaignCtrl
   *
   * @description
   *
   */
  angular
    .module('campaign')
    .controller('CampaignCtrl', CampaignCtrl);

  function CampaignCtrl() {
    var vm = this;
    vm.ctrlName = 'CampaignCtrl';
  }
}());
