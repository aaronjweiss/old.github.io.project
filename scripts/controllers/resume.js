'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.resume', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/resume', {
            templateUrl: '/views/resume.html',
            controller: 'resumeController'
        });
    }])

    .controller('resumeController', [function () {
        //this.sendMessage = 'Aspiring full-stack developer; hobbyist game developer.';
    }]);
