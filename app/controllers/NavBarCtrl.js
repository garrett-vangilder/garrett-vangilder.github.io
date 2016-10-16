app.controller("NavBarCtrl", function($scope, $location, $window, $routeParams, $route) {
  $scope.isActive = function(route) {
       return route === $location.path();
   }
});
