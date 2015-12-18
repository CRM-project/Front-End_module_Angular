var task = angular.module('app.task', []);

contact.config(function ($stateProvider) {
    $stateProvider.state('index.task', {
        url: '/task',
        views: {
            'index': {
                templateUrl: 'tpl/task/index.html'/*,
                controller: function ($state, $scope) {
                    $scope.$on('$stateChangeSuccess', function() {
                        if ($state.is('index.task')) $state.go('index.task.tasks');
                    });
                }*/
            }
        }
    });
});

contact.run(function () {
    //contact.backendUrl = 'http://localhost:1500/crm';
});