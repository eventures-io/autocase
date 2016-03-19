'use strict';

angular.module('autocaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/documents',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
    .state('detail', {
      url: '/documents/:id',
      templateUrl: 'app/detail/detail.html',
      controller: 'DetailCtrl'
    })
  });
