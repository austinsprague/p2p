(function () {
  'use strict'

  angular
  .module('campaignDetail')
  .factory('CampaignDetailService', CampaignDetailService);

  function CampaignDetailService($http) {

    return {
      getProjectsById: function(id) {
        return $http.get('http://localhost:5000/api/projects/'+ id).then(function(result) {
          return result.data;
        });
      },
      getUsers: function() {
        return $http.get('http://localhost:5000/api/users').then(function(users) {
          // console.log(users.data);
          return users.data;
        });
      },
      getUserById: function(id) {
        return $http.get('http://localhost:5000/api/users/'+ id).then(function(user){
          console.log(user.data);
          return user.data;
        });
      },
      createUserCharge: function(projId){
        console.log('clicked');
        vm.userCharge = {};
        vm.userCharge.backer_id = 1;
        vm.userCharge.proj_id = projId;
        vm.userCharge.amount = 1000;
        vm.userCharge.user_id = 1;

        return $http.post('http://localhost:5000/api/user_projects/' + vm.userCharge.proj_id + '/charge', vm.userCharge)
        .then(function(user){
          console.log('posted');
          return user;
        })
      }
    }
  };
}());
