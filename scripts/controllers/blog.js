// create the controller and inject Angular's $scope
angular.module('ngRoute').controller('blogController', ['$scope', '$http', function ($scope, $http) {
    // create a message to display in our view
    $scope.message = 'My Blog.';
}]);