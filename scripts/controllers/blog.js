'use strict';

// create the controller and inject Angular's $scope
app

    .controller('blogController', ['$scope', function ($scope) {
        $scope.message = 'My thoughts.';
    }]);
