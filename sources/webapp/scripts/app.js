var crm = angular.module('crm', ['ngRoute', 'ngResource']);

crm.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');

        $routeProvider.
            when('/', {
               templateUrl: 'tpl/test.html'
            }).
            when('/users', {
                templateUrl: 'tpl/user.html',
                controller: 'userController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);