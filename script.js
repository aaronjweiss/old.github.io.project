// create the module and name it myApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the resume page
        .when('/resume', {
            templateUrl: 'pages/resume.html',
            controller: 'resumeController'
        })

        // route for the blog page
        .when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'blogController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Aspiring full-stack developer; hobbyist game developer.';
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