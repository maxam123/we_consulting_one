'use strict';
angular.module('main')
.controller('ProfileCtrl', function ($log, $ionicPopup, $scope) {
  $scope.showAlert = function(icon) {
  $scope.data = icon;
  switch (icon) {
    case 'email':
      $scope.title='maal1207@student.miun.se';
      $scope.template='redirect to email app';
      break;
    case 'phone':
      $scope.title='+46722013199';
      $scope.template='redirect to call app';
      break;
    case 'video':
      $scope.title='video conference';
      $scope.template='redirect to video conference app';
      break;
    default:
      $scope.title='error';
      $scope.template='error';

  }
  $ionicPopup.alert({
    title: $scope.title,
    template: $scope.template
  });
  };
});
