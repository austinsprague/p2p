(function () {
  'use strict'

  angular
  .module('campaignDetail')
  .factory('CampaignDetailService', CampaignDetailService);

  function CampaignDetailService($http) {

    return {
      getProjectsById: function(id) {
        return $http.get('/api/projects/'+ id).then(function(result) {
          return result.data;
        });
      },
      getUsers: function() {
        return $http.get('/api/users').then(function(users) {
          // console.log(users.data);
          return users.data;
        });
      },
      getUserById: function(id) {
        return $http.get('/api/users/'+ id).then(function(user){
          console.log(user.data);
          return user.data;
        });
      },
      createUserCharge: function(backer_id,proj_id,amount,user_id){
        console.log('clicked');
        var userCharge = {};
        userCharge.backer_id = 1;
        userCharge.proj_id = projId;
        userCharge.amount = 1000;
        userCharge.user_id = 1;

        return $http.post('/api/user_projects/' + userCharge.proj_id + '/charge', vm.userCharge)
        .then(function(user){
          console.log('posted');
          return user;
        })
      },
      fundCampaign: function (proj_id) {
        return $http.post('/api/user_projects/' + proj_id + '/transfer')
        .then(function(data){
          console.log('posted');
          return data;
        })
      }
    }
  };
}());
