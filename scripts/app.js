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
