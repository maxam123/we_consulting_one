/**
 * Created by Thomas Schoutsen on 13/09/2016.
 */
'use strict';
angular.module('main')
  .controller('HomeCtrl', function ($log, $scope) {

    $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);

    $scope.mails = [
      {
        senderImage: 'main/assets/images/profile_placeholder.jpg',
        senderName: 'Max Alenius',
        emailText: 'Hej! Did you see the latest .. Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead'
      },
      {
        senderImage: 'main/assets/images/profile_placeholder_3.jpg',
        senderName: 'Daniel Peterson',
        emailText: 'Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead?'
      }
    ]

    $scope.highscores = [
      {
        userImage: 'main/assets/images/profile_placeholder_2.jpg',
        userName: 'Ana Eliasson',
        userScore: '614'
      },
      {
        userImage: 'main/assets/images/profile_placeholder_3.jpg',
        userName: 'Daniel Peterson',
        userScore: '560'
      },
      {
        userImage: 'main/assets/images/profile_placeholder_4.jpg',
        userName: 'Reza Perona',
        userScore: '512'
      }
    ];

    $scope.upcomingEvents = [
      {
        eventTime: '13.00 - 14.00',
        eventText: 'Monthly conference call'
      },
      {
        eventTime: '15.30 - 17.00',
        eventText: 'Meeting with Daniel'
      }
    ];


  });
