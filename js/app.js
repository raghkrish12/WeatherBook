var myApp = angular.module("weatherApp", []);


myApp.controller("weatherController", function($scope, $http){
  $scope.cars = [];

  (function(){
    $http.get("js/cars.json").then(
        function(response){
          console.log(response);
          $scope.cars = response.data;
        },
        function(data){
          console.log("it is en error");
        });
  })();
});
