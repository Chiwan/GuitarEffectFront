// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
angular.module('scotchApp', ['ngRoute'])

// configure our routes
    .config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'app/home/home.html',
            controller  : 'MainController',
            controllerAs: 'vm'
        })
        .when('/signup', {
            templateUrl: 'app/signup/signup.html',
            controller : 'SignupController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'LoginController'
        })
        .otherwise({ redirectTo: '/login' });

    });




