'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log, $scope) {
  $scope.showContent = true;
  $scope.showResult = false;

  $scope.menu = {
    search: '',
    lastSearch: ''
  };

  $scope.onSearchChange = function() {
    $log.log($scope.menu.search.length);
    if($scope.menu.search.length > 0){
      $scope.showContent = false;
      $scope.showResult = true;
      $log.log("greater");
    }else{
      $scope.showContent = true;
      $scope.showResult = false;
    }
  };
  $scope.discardSearch = function() {

    $scope.menu.lastSearch = $scope.menu.search;
    $scope.menu.search = "";
    $scope.showContent = true;
    $scope.showResult = false;
  };
  $scope.clickLastSearch = function() {
    $scope.menu.lastSearch = $scope.menu.search;
    $scope.menu.search = "";
    $scope.showContent = true;
    $scope.showResult = false;
  };
});
