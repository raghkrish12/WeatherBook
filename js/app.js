var myApp = angular.module("weatherApp", []);


myApp.controller("weatherController", function($scope, $http){
  $scope.weatherData ;
  $scope.appKey = "85db67b64f975327812dc8db92aa38e0";

  $scope.getWeatherInfo = function(cityName){
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName +",uk&appid=" + $scope.appKey).then(
        function(response){
          $scope.weatherData = response.data;
        },
        function(data){
          console.log("it is en error");
        });
  };
});
