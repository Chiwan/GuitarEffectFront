(function() {
    'use strict';
    // create the controller and inject Angular's $scope
    angular.module('scotchApp')
        .controller('MainController', MainController);

    //Permet de garder les variables malgrés la mimification
    MainController.$inject = ['$scope', '$http'];
    function MainController($scope, $http) {

        $scope.message = 'Everyone come and see how good I look!';
        $http.get("http://localhost:3000/sounds").success(function (response) {
            $scope.status = response.status;
        }).error(function(response){
            $scope.status = 'Not working, try again';
        });
    }
})();
