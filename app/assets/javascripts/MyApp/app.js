'use strict';

var MyApp = angular.module('MyApp', ['ngRoute', 'ngAnimate']);
  
MyApp.config(function($routeProvider){
  $routeProvider
    .when("/", { 
      controller: "MainsCtrl",
      templateUrl: "/assets/MyApp/views/main.html"
    })

    .when("/create", { 
      controller: "CreatesCtrl",
      templateUrl: "/assets/MyApp/views/create.html"
    })      

    .when("/play", { 
      controller: "PlaysCtrl",
      templateUrl: "/assets/MyApp/views/play.html"
    })

    .otherwise({ redirectTo: '/' });
});

MyApp.factory('Quiz', function(){

  var data = [
    {q: 'Are you ready?', a: 'yes'},
    {q: '1+1', a: '2'}
  ];
    // return the factory object
    return {
      getData: function() {
        return data;
      }
    }

});






