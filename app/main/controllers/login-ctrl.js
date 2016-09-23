'use strict';
angular.module('main')
.controller('LoginCtrl', function ($log, $scope, AadClient, $state) {

  $log.log('Hello from your Controller: LoginCtrl in module main:. This is your controller:', this);

  $scope.logMeIn = function () {

    AadClient.authenticate().then(function (token) {
      $log.log('Should be logged in now! Redirecting to homepage');
      $state.go('main.home');
    }, $scope.errorHandler);

  };

  $scope.logUsersInConsole = function () {
    AadClient.getUsers().then(function (users) {
      $log.log(users);
    })
  }



});
