
crm.controller('CompanyController', function($scope, $http, CompanyFactory) {


    $scope.vm = {};

    $scope.vm.prepare = function (company) {
        $scope.vm.modalTitle = company ? 'Изменение профиля компании: ' + company.shortName : 'Новый профиль';
        $scope.vm.company = angular.copy(company) || {};
        $scope.vm.index = $scope.vm.companies.indexOf(company);
    };

    //$scope.vm.companies = CompanyFactory.query();
    CompanyFactory.query(function(data) {
        console.log(data);
        $scope.vm.companies = data;
    });

    $scope.vm.create = function() {
        CompanyFactory.save($scope.vm.company, function (data) {
            $scope.vm.company.id = data.id;
            $scope.vm.companies.push($scope.vm.company);
            $scope.vm.prepare($scope.vm.company);
        });
    };

    $scope.vm.update = function() {
        CompanyFactory.update($scope.vm.company, function () {
            $scope.vm.companies[$scope.vm.index] = angular.copy($scope.vm.company);
        });
    };

    $scope.vm.remove = function(company) {
        CompanyFactory.remove({id: company.id}, function () {
            var index = $scope.vm.companies.indexOf(company);
            $scope.vm.companies.splice(index, 1);
            company = undefined;
        });
    };

});
