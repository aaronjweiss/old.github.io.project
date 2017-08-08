'use strict';

// create the controller and inject Angular's $scope
app

    .controller('blogController', ['$scope', function ($scope) {
        $scope.orightml = '';
        $scope.htmlcontent = $scope.orightml;
        $scope.disabled = false;
    }]);
