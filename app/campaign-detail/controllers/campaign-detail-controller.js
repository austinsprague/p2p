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

  function CampaignDetailCtrl($state, $stateParams, CampaignDetailService, $http) {
    var vm = this;

    CampaignDetailService.getProjectsById($stateParams.id).then(function(data) {
      vm.projectById = data;
      vm.company_name = data.company_name;
      vm.img_url = data.img_url;
      console.log(vm.projectById);
    });


    vm.createUserCharge = function(){
      console.log('clicked');
      vm.userCharge = {};
      vm.userCharge.backer_id = 6;
      vm.userCharge.proj_id = 4;
      vm.userCharge.amount = 1000;
      vm.userCharge.user_id = 3;

      $http.post('http://localhost:5000/api/user_projects/' + vm.userCharge.proj_id + '/charge', vm.userCharge)
      .then(function(user){
        console.log('posted');
        return user;
      })
    }
  }
}());
