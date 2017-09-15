"use strict"

var app = angular.module("Profile", ["ngRoute", "ngMaterial"])


app.config(function ($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/about.html",
      controller: "AboutCtrl",
      data : { pageTitle: 'about me' }
    }).
    when("/projects", {
      templateUrl: "partials/projects.html",
      controller: "ProjectCtrl"
    }).
    when("/contact", {
      templateUrl: "partials/contact.html",
      controller: "ContactCtrl"
    }).
    when("/technologies", {
      templateUrl: "partials/technologies.html",
      controller: "TechnologiesCtrl"
    }).
    when("/experience", {
      templateUrl: "partials/experience.html",
      controller: "ExperienceCtrl"
    })
    .otherwise("/")
})
