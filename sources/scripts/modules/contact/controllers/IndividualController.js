contact.controller('IndividualController', function ($scope, Individual) {
    $scope.vm = this;

    $scope.vm.individuals = Individual.query();

    $scope.vm.prepare = function (individual) {
        $scope.vm.individual = angular.copy(individual) || {};
        $scope.vm.index = $scope.vm.individuals.indexOf(individual);
    };

    $scope.vm.create = function () {
        Individual.save($scope.vm.individual, function (individual) {
            $scope.vm.individual.id = individual.id;
            $scope.vm.individuals.push($scope.vm.individual);
        });
    };

    $scope.vm.update = function () {
        Individual.update($scope.vm.individual, function () {
            $scope.vm.individuals[$scope.vm.index] = angular.copy($scope.vm.individual);
        });
    };

    $scope.vm.delete = function () {
        Individual.remove({id: $scope.vm.individual.id}, function () {
            $scope.vm.individuals.splice($scope.vm.index, 1);
        });
    };

    $scope.vm.detail = function () {
        $scope.vm.individual = Individual.get({id: $scope.vm.individual.id});
    };
});