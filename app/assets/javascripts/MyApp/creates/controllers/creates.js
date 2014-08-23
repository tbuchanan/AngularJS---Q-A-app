'use strict';

function CreatesCtrl(Quiz, $scope) {
 
  $scope.quiz = $scope.quiz || Quiz.getData();

  $scope.getTotal = function(){
    return $scope.quiz.length;
  }

  $scope.addItem = function(question, answer){
    if(question && answer){
      $scope.quiz.push( {q: $scope.formQuestion, a: $scope.formAnswer} );
      $scope.formQuestion = '';
      $scope.formAnswer = '';
    }
  }

  $scope.removeLast = function(){
    $scope.quiz.pop();
  }

  $scope.clearList = function(){
    $scope.quiz = [];
  }


}
