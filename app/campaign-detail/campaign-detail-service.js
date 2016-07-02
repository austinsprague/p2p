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
      }
    }
  };
}());
