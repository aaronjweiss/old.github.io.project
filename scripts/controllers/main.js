// create the controller and inject Angular's $scope
angular
    .module('ngRoute')
    .controller('mainController', mainController($scope, $http));

function mainController($scope, $http) {
    $scope.message = 'Aspiring full-stack developer; hobbyist game developer.';
}
    
