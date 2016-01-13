/**
 * Created by kha on 11/01/16.
 */
(function(){
    'use strict';
    // create the controller and inject Angular's $scope
    angular.module('scotchApp')
        .controller('LoginController', LoginController);
    //Permet de garder les variables malgrés la mimification
    LoginController.$inject = ['$scope'];
    function LoginController($scope) {

            $scope.message = 'Login';

    }
})();
