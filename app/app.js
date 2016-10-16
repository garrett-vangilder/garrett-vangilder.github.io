"use strict"

var app = angular.module("Profile", ["ngRoute"])


app.config(function($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "partials/about.html",
    controller: "AboutCtrl"
  }).
  when("/projects", {
    templateUrl: "partials/projects.html",
    controller: "ProjectCtrl"
  }).
  when("/resume", {
    templateUrl: "partials/resume.html",
    controller: "ResumeCtrl"
  })
  .otherwise("/")
})
