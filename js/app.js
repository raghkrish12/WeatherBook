var myApp = angular.module("weatherApp", []);


myApp.controller("weatherController", function($scope, $http){
  $scope.weatherData;
  $scope.appKey = "85db67b64f975327812dc8db92aa38e0";
  $scope.isHide = true;

  $scope.getWeatherInfo = function(cityName){
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName +",uk&appid=" + $scope.appKey).then(
        function(response){
          $scope.weatherData = response.data;
          if ($scope.weatherData != null) {
              $scope.weatherData.main.temp_min = ($scope.weatherData.main.temp_min)*(9/5)-459.67;
              $scope.weatherData.main.temp_max = ($scope.weatherData.main.temp_max)*(9/5)-459.67;
          }
          $scope.isHide = false;
        },
        function(data){
          console.log("it is en error");
        });
  };
});
