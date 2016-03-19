'use strict';

angular.module('autocaseApp')
  .controller('MainCtrl', function ($scope, $http, $state) {
    $scope.documents = [];

    $http.get('/api/documents').success(function(documents) {
      $scope.documents = documents;
    });

    $scope.getDetail = function(id){
      $state.go('detail', {id: id});
    }

  });
