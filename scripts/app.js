// create the module and name it myApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'aboutController'
        })

        // route for the resume page
        .when('/resume', {
            templateUrl: '/views/resume.html',
            controller: 'resumeController'
        })

        // route for the blog page
        .when('/blog', {
            templateUrl: '/views/blog.html',
            controller: 'blogController'
        });
});



myApp.controller('aboutController', function ($scope) {
    $scope.message = 'About me.';
});

myApp.controller('resumeController', function ($scope) {
    $scope.message = 'Informative.';
});

myApp.controller('blogController', function ($scope) {
    $scope.message = 'My Blog.';
});