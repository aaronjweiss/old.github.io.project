'use strict';

// create the controller and inject Angular's $scope
app

    .controller('aboutController', ['$scope', function ($scope) {
        $scope.message = 'About me.';
    }]);
