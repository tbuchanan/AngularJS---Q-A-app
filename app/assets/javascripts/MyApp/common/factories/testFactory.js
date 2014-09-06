'use strict';

var data;

MyApp.factory('numRecords', function($http){
  
  return {
    list: function(data){
      $http({
        method: 'GET',
        url: 'mock/test.json',
        cache: true
      }).success(data);
      return data;
    }
  };
});

// MyApp.factory('numRecords', function(){
//   var string = 'taco';
//   return {
//     getTaco: function(){
//       return string
//     }
//   }

// });


