angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl:'./home/home.html',
    controller:'homeCtrl'
  })
})
