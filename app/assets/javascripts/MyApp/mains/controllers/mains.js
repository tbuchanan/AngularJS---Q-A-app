'use strict';

var testLength;

function MainsCtrl($scope, numRecords) {
  numRecords.list(function(numRecords){
    $scope.numRecords = numRecords;
    $scope.testLength = numRecords.length;
  });
}


// var scheduledLength;
// var recurringLength;

// function MainsCtrl($scope, $http) {
//    $http.get('/mock/test.json')
//   .then(function(result) {
//     $scope.test = result.data;
//     recurringLength = result.data.length;  

//   $scope.recurTotal = function() {
//     return recurringLength;
//   }  

//   });

//   $http.get('/mock/test2.json')
//   .then(function(result) {
//     $scope.test2 = result.data;
//     scheduledLength = result.data.length;  

//   $scope.scheduledTotal = function() {
//     return scheduledLength;
//   }  

//   });
// }