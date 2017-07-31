// create the controller and inject Angular's $scope
angular.module('myApp').controller('blogController', ['$scope', '$http', function ($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Aspiring full-stack developer; hobbyist game developer.';
}]);
