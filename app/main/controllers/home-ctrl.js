/**
 * Created by Thomas Schoutsen on 13/09/2016.
 */
'use strict';
angular.module('main')
  .controller('HomeCtrl', function ($log, $scope) {

    $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);


    $scope.name = "Max";

    $scope.mails = ["Hej! Did you see the latest ..", "Hej Hej, small update on the system today .."];


  });
