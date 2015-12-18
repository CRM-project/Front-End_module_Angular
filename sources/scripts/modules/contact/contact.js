var contact = angular.module('app.contact', []);

contact.config(function ($stateProvider) {
    $stateProvider.state('index.contact', {
        url: '/contact',
        views: {
            'index': {
                templateUrl: 'tpl/contact/index.html',
                controller: function ($state, $scope) {
                    $scope.$on('$stateChangeSuccess', function() {
                        if ($state.is('index.contact')) $state.go('index.contact.contacts');
                    });
                }
            }
        }
    }).state('index.contact.contacts', {
        url: '/contacts',
        views: {
            'contact': {
                templateUrl: 'tpl/contact/contacts.html',
                controller: 'ContactController'
            }
        }
    }).state('index.contact.companies', {
        url: '/companies',
        views: {
            'contact': {
                templateUrl: 'tpl/contact/companies.html',
                controller: 'CompanyController'
            }
        }
    }).state('index.contact.individuals', {
        url: '/individuals',
        views: {
            'contact': {
                templateUrl: 'tpl/contact/individuals.html',
                controller: 'IndividualController'
            }
        }
    });
});

contact.run(function () {
    contact.backendUrl = 'http://localhost:1500/crm';
});