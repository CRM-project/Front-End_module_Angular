'use strict';

var app = angular.module('app', ['ngResource', 'ui.router', 'app.contact', 'app.task']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('index', {
        url: '/index',
        templateUrl: 'tpl/index.html',
        controller: 'IndexController'
    });
    $urlRouterProvider.otherwise('/index');
    $locationProvider.html5Mode(true).hashPrefix('!');
});