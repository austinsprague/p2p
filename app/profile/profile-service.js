(function () {
  'use strict'

  angular
  .module('profile')
  .factory('ProfileService', ProfileService);

  function ProfileService($http) {

    return {
      getUser: function(userId) {
        return $http.get('api/users/'+ userId).then(function(result) {
          return result.data;
        });
      },
      getProjects: function(userId) {
        return $http.get('api/projects/user/' + userId).then(function(result) {
          return result.data;
        })
      },
      getBackedProjects: function(userId) {
        return $http.get('api/user_projects/' + userId).then(function(result) {
          return result.data;
        })
      },
      createCampaign: function(campaign, userId) {
        $http.post('api/projects/insert/' + userId, campaign).then(function(result) {
          return result.data;
        })
      }
    }
  }
}());
