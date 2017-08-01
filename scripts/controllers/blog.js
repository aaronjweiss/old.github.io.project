'use strict';

// create the controller and inject Angular's $scope
angular.module('myApp.blog', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: '/views/blog.html',
            controller: 'blogController'
        });
    }])

    .controller('blogController', ['$scope', '$http', function ($scope, $http) {
        $scope.message = 'My thoughts.';
    }]);
