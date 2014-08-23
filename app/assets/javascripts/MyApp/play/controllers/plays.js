'use strict';


function PlaysCtrl(Quiz, $scope, $timeout) {
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

  $scope.counter = $scope.counter || 0;

  $scope.incrementCounter = function(){
    if($scope.counter === $scope.getTotal()-1){
      $scope.counter = 0;
    }
    else {
      $scope.counter += 1;
    }
  }

  $scope.clearAnswer = function(){
    $scope.userAnswer = '';
  }

  $scope.nextQuestion = function(){
    $timeout(function(){
      $scope.myClass = '';
    }, 500);
    $scope.incrementCounter();
    $scope.clearAnswer();
  }

  $scope.isCorrect = function(value){
    return value === this.quiz[this.counter].a ? true : false;
  }

  //answre for input comparison
  $scope.$watch("userAnswer", function(newValue){
    if($scope.isCorrect(newValue) ){
      $scope.myClass = 'flip-add';
      $scope.nextQuestion();
    }
  });

}
