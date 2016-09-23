'use strict';
angular.module('main')
.controller('LoginCtrl', function ($log, $scope, AadClient, $state, $http) {

  $log.log('Hello from your Controller: LoginCtrl in module main:. This is your controller:', this);

  $scope.authorization = '';

  $scope.logInWithMicrosoft = function () {

    AadClient.authenticate().then(function (token) {
      $scope.authorization = 'Bearer ' + token.accessToken;

      $log.log('Should be logged in now! Authorization: ' + JSON.stringify($scope.authorization) );
      //$state.go('main.home');
    }, $scope.errorHandler);

  };

  $scope.testGraphRequest = function(){

    $http({
      method: 'GET',
      url: 'https://graph.microsoft.com/v1.0/me',
      headers: {
        'Authorization': $scope.authorization
      }
    }).then(function (me) {
      $log.log(me);
    });

  };



});
