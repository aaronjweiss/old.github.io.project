'use strict';

// create the controller and inject Angular's $scope
app

    .controller('mainController', ['$scope', function ($scope) {
        $scope.message = 'Aspiring full-stack developer; hobbyist game developer.';
    }]);