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
    vm.campaignId = $stateParams.id;
    var currentUser = CampaignDetailService.getCurrentUser();
    if (currentUser.id) {
      vm.loggedin = true;
      vm.currentUserId = currentUser.id;
      vm.currentUserName = currentUser.display_name;
    } else {
      vm.loggedin = false;
    }

    CampaignDetailService.getProjectsById(vm.campaignId).then(function(data) {
      vm.projectById = data;
      vm.campaignUserId = data.user_id;
      vm.company_name = data.company_name;
      vm.img_url = data.img_url;
      vm.category = data.category;
      vm.neighborhood = data.neighborhood;
      vm.status = data.status;
      vm.info = [];
      angular.forEach(data, function(value, key) {
        var titles = ['pitch', 'targ_mkt','uniq_comp', 'history', 'use_of_funds']
        if (value && titles.includes(key)) {
          var obj = {
            title: key.replace(/_/g, " "),
            details: value
          }
          this.push(obj);
        }
      }, vm.info);
    });
    CampaignDetailService.getBackedInfo(vm.campaignId).then(function(data){
      vm.backerCount = data.length;
      vm.amtPledged = 0;
      for (var i = 0; i < data.length; i++) {
        vm.amtPledged += data[i].amt_pledged;
      }
    })

    vm.createUserCharge = function(amount){
      var token;
      if (vm.loggedin && amount) {
        vm.userCharge = {};
        vm.userCharge.backer_id = vm.currentUserId;
        vm.userCharge.proj_id = vm.campaignId;
        vm.userCharge.amount = amount;
        vm.userCharge.user_id = vm.campaignUserId;

        $http.post('/api/user_projects/charge/' + vm.campaignId, vm.userCharge)
        .then(function(user){
          $state.go('profile');
        })
      }
      else {
        alert('Please login or register to support this campaign')
      }
    }
  }
}());
