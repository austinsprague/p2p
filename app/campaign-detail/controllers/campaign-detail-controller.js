(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name campaignDetail.controller:CampaignDetailCtrl
   *
   * @description
   *
   */
  angular
    .module('campaignDetail')
    .controller('CampaignDetailCtrl', CampaignDetailCtrl);

  function CampaignDetailCtrl($state,$stateParams, CampaignDetailService) {
    var vm = this;
    vm.ctrlName = 'CampaignDetailCtrl';

    CampaignDetailService.getProjectsById($stateParams.id).then(function(data) {
      vm.projectById = data;
      console.log(vm.projectById);
    })
  }
}());
