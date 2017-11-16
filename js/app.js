var myapp=angular.module("LunchChecker",[]);

myapp.controller("LunchController",function($scope){

  $scope.lunchChecker = function(items){
    if (items == undefined){
      $scope.message="Please enter data first";
    }
    var count = items.split(",");
    if(count.length<=3){
      $scope.message="Enjoy";
    }
    else{
      $scope.message="Too much";
    }
  };
});
