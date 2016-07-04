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

  function CampaignDetailCtrl($state, $stateParams, CampaignDetailService) {
    var vm = this;

    CampaignDetailService.getProjectsById($stateParams.id).then(function(data) {
      vm.projectById = data;
      vm.company_name = data.company_name;
      vm.img_url = data.img_url;
      // console.log(vm.projectById);
    })
  }
}());
