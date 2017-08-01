'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.blog', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: '/views/blog.html',
            controller: 'blogController'
        });
    }])

    .controller('blogController', [function () {
        //this.sendMessage = 'Aspiring full-stack developer; hobbyist game developer.';
    }]);
