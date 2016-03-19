'use strict';

angular.module('autocaseApp')
  .controller('DetailCtrl', function ($scope, $http, $stateParams) {
    $scope.document = {};

    var id  =  $stateParams.id;

    $http.get('/api/documents/' + id).success(function(document) {
      $scope.document = document;
    });

  });
