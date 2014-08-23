
'use strict';

var MyApp = angular.module('MyApp', ['ngRoute']);
  
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
      controller: "PlayCtrl",
      templateUrl: "/assets/MyApp/views/play.html"
    })

    .otherwise({ redirectTo: '/' });
});

MyApp.factory('Quiz', function(){

  var data = [{q: 'Are you ready?', a: 'yes'}];

    return {
      getData: function() {
        return data;
      }
    }

});






