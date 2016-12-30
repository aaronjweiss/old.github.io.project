// create the module and name it myApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/#', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/#about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the resume page
        .when('/#resume', {
            templateUrl: 'pages/resume.html',
            controller: 'resumeController'
        })

        // route for the blog page
        .when('/#blog', {
            templateUrl: 'pages/blog.html',
            controller: 'blogController'
        })

        // route for the showcase page
        .when('/#showcase', {
            templateUrl: 'pages/showcase.html',
            controller: 'showcaseController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('resumeController', function ($scope) {
    $scope.message = 'Resume.';
});

myApp.controller('blogController', function ($scope) {
    $scope.message = 'Blog.';
});

myApp.controller('showcaseController', function ($scope) {
    $scope.message = 'Showcase.';
});