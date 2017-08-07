'use strict';

// create the controller and inject Angular's $scope
app

    .controller('blogController', ['$scope', function ($scope) {
        function wysiwygeditor($scope) {
            $scope.orightml = '<h2>Blog away!</h2>>';
            $scope.htmlcontent = $scope.orightml;
            $scope.disabled = false;
        };
    }]);
