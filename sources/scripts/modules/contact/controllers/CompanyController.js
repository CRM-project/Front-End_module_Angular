contact.controller('CompanyController', function ($scope, Company) {
    $scope.vm = this;

    $scope.vm.companies = Company.query();

    $scope.vm.prepare = function (company) {
        $scope.vm.company = angular.copy(company) || {};
        $scope.vm.index = $scope.vm.companies.indexOf(company);
    };

    $scope.vm.create = function () {
        Company.save($scope.vm.company, function (company) {
            $scope.vm.company.id = company.id;
            $scope.vm.companies.push($scope.vm.company);
        });
    };

    $scope.vm.update = function () {
        Company.update($scope.vm.company, function () {
            $scope.vm.companies[$scope.vm.index] = angular.copy($scope.vm.company);
        });
    };

    $scope.vm.delete = function () {
        Company.remove({id: $scope.vm.company.id}, function () {
            $scope.vm.companies.splice($scope.vm.index, 1);
        });
    };

    $scope.vm.detail = function () {
        $scope.vm.company = Company.get({id: $scope.vm.company.id});
    };
});