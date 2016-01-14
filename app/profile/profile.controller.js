(function(){
    'use strict';
    // create the controller and inject Angular's $scope
    angular.module('scotchApp')
        .controller('ProfileController', ProfileController);
    //Permet de garder les variables malgrés la mimification
    ProfileController.$inject = ['$scope'];
    function ProfileController($scope) {

        $scope.id = 'Profile';
        $scope.email = 'profile@gmail.com';

    }
})();
