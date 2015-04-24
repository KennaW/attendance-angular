var attendanceSheet = angular.module('attendanceSheet', ['ui.router']);

attendanceSheet.config(function($stateProvider) {

  $stateProvider

  .state('home', {
    url: "",
    templateUrl: "partials/home.html"
  })

//nested states from home
  .state('home.signin', {
    url:"/signin",
    templateUrl: 'partials/signin.html'
  })

  .state('home.presentAbsent', {
    url:"/present",
    templateUrl: 'partials/presentAbsent.html'
  });

  //add states

});
