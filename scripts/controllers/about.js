'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: '/views/about.html',
            controller: 'aboutController'
        });
    }])

    .controller('aboutController', ['$scope', '$http', function ($scope, $http) {
        $scope.message = 'About me.';
    }]);
