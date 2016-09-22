/**
 * Created by Thomas Schoutsen on 13/09/2016.
 */
'use strict';
angular.module('main')
  .controller('HomeCtrl', function ($log, $scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate) {
    // disable sliding in the sidemenu on this view
    $ionicSideMenuDelegate.canDragContent(false);
    $scope.showNews = true;
    $scope.showHighscore = true;
    $scope.mails = [
      {
        senderImage: 'main/assets/images/profile_placeholder.jpg',
        senderName: 'Sidney Crosby',
        emailText: 'Hej! Did you see the latest .. Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead?'
      },
      {
        senderImage: 'main/assets/images/profile_placeholder.jpg',
        senderName: 'Sidney Crosby',
        emailText: 'Hej! Did you see the latest .. Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead?'
      },
      {
        senderImage: 'main/assets/images/profile_placeholder.jpg',
        senderName: 'Sidney Crosby',
        emailText: 'Hej! Did you see the latest .. Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead?'
      },
      {
        senderImage: 'main/assets/images/profile_placeholder.jpg',
        senderName: 'Peter Forsberg',
        emailText: 'Hej! Did you see the latest .. Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead?'      },
      {
        senderImage: 'main/assets/images/profile_placeholder_3.jpg',
        senderName: 'Mats Sundin',
        emailText: 'Hej! Did you see the latest .. Hej Hej, small update on the meeting we\'re having today. What do you think about doing it tomorrow instead?'      }
    ];
    $scope.toggleNews = function() {
      if($scope.showNews==false){
        $scope.showNews = true;
      }else{
        $scope.showNews = false;
      }
    };
    $scope.toggleHighscore = function() {
      if($scope.showHighscore==false){
        $scope.showHighscore = true;
      }else{
        $scope.showHighscore = false;
      }
    };
    $scope.recentNews = [
      {
        date: '19/09/2016',
        image: 'main/assets/images/profile_placeholder_4.jpg',
        author: 'Reza Perona',
        title: 'Updates on the Intranet',
        content: 'From now on the intranet will feature a new way to attend video conferences. This update will make it easier to communicate with your colleagues. Please use it, it\'s awesome! And bla bla bla and woopdiedobiedoo and yahoo this is really cool.'
      },
      {
        date: '11/09/2016',
        image: 'main/assets/images/profile_placeholder_2.jpg',
        author: 'Ana Eliasson',
        title: 'We conference (The Netherlands)',
        content: 'The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city\'s 17th-century "Golden Age."'
      }
    ];

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
      },
      {
        eventTime: '18.00 - 20.00',
        eventText: 'Dinner with client'
      }
    ];


  });
