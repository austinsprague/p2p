(function () {
  'use strict'

  angular
  .module('campaign')
  .factory('CampaignService', CampaignService);

  function CampaignService($http) {

    return {
      getProjects: function() {
        return $http.get('http://localhost:5000/api/projects').then(function(result) {
          return result.data;
        });
      }
      // getUsers: function() {
      //   return $http.get('http://localhost:5000/api/users').then(function(users) {
      //     return users.data;
      //   });
      // }
    }
  };
}());
