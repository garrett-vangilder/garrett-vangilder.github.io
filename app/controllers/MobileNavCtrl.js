app.controller("MobileNavCtrl", function($scope, $location, $window, $routeParams) {

    $scope.onSwipeLeftFromAbout = function(ev) {
        $window.location.href = `#/projects`
    };
    $scope.onSwipeRightFromAbout = function(ev) {
        $window.location.href = `#/resume`
    };
    // $scope.onSwipeUp = function(ev) {
    //   alert('You swiped up!!');
    // };

    // $scope.onSwipeDown = function(ev) {
    //   alert('You swiped down!!');
    // };
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