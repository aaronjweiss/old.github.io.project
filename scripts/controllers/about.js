// create the controller and inject Angular's $scope
angular.module('myApp').controller('aboutController', function () {
    // create a message to display in our view
    $scope.message = 'About me.';
});