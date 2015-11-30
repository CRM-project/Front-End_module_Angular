var crm = angular.module('crm', ['ngRoute', 'ngResource']);

crm.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');

        $routeProvider.
            when('/', {
               templateUrl: 'tpl/root.html'
            }).
            when('/users', {
                templateUrl: 'tpl/user.html',
                controller: 'UserController'
            }).
            when('/companies', {
                templateUrl: 'tpl/company.html',
                controller: 'CompanyController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

crm.run(function(){
    crm.backendUrl = 'http://localhost:8080/';
});