/**
 * Created by kha on 11/01/16.
 */
(function(){
    'use strict';
    // create the controller and inject Angular's $scope
    angular.module('scotchApp')
        .controller('SignupController', SignupController);
    //Permet de garder les variables malgrés la mimification
    SignupController.$inject = ['$scope'];
    function SignupController($scope) {

        $scope.message = 'Sign up';

    }
})();
