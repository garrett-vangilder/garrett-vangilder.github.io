app.controller("MobileNavCtrl", function($scope, $location, $window, $routeParams) {

    $scope.onSwipeLeftFromAbout = function(ev) {
        $window.location.href = `#/projects`
    };
    $scope.onSwipeRightFromAbout = function(ev) {
        $window.location.href = `#/resume`
    };
    $scope.onSwipeLeftFromProjects = function(ev) {
        $window.location.href = `#/resume`
    };
    $scope.onSwipeRightFromProjects = function(ev) {
        $window.location.href = `#/about`
    };
    $scope.onSwipeLeftFromResume = function(ev) {
        $window.location.href = `#/about`
    };
    $scope.onSwipeRightFromResume = function(ev) {
        $window.location.href = `#/projects`
    };
});