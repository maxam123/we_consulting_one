'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/home');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.home', {
        url: '/home',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/home.html',
            controller: 'HomeCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
    .state('main.profile', {
      url: '/profile',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/profile.html',
          controller: 'ProfileCtrl as ctrl'
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.html',
      controller: 'LoginCtrl as ctrl'
    });

})
  .value('tenantName', 'blinddata.onmicrosoft.com')
  .value('authority', 'https://login.windows.net/blinddata.onmicrosoft.com/')
  .value('resourceUrl', 'https://graph.windows.net/')
  .value('appId', 'c178abd9-5132-4bd1-a5aa-11f2c24016e2')
  .value('redirectUrl', 'http://ThomasAADGraphClient')
;
