'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/views/main.html',
            controller: 'mainController'
        });
    }])

    .controller('mainController', ['$scope', '$http', function ($scope, $http) {
        $scope.message = 'Aspiring full-stack developer; hobbyist game developer.';
    }]);
