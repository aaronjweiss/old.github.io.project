// create the module and name it myApp
angular.module('myApp', [
    'ngRoute',
    'myApp.main',
    'myApp.about'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
// configure our routes
angular.module('myApp', ['ngRoute']).config(function ($routeProvider) {
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