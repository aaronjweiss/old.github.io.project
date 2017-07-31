'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.main', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/views/home.html',
            controller: 'mainController'
        });
    }])

    .controller('mainController', [function () {
        //this.sendMessage = 'Aspiring full-stack developer; hobbyist game developer.';
    }]);
