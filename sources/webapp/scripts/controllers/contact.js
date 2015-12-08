
crm.controller('ContactController', function($scope, $http, ContactFactory, CompanyFactory) {

    $scope.vm = {};
    $scope.vm.modalTab = 0;

    $scope.vm.prepare = function (contact) {
        $scope.vm.modalTitle = contact ? 'Изменение профиля компании: ' + contact.shortName : 'Новый профиль';
        $scope.vm.company = angular.copy(contact) || {};
        delete $scope.vm.company.type;
        delete $scope.vm.company.id;
        $scope.vm.index = $scope.vm.contacts.indexOf(contact);
    };

    //$scope.vm.contacts = ContactFactory.query();
    ContactFactory.query(function(data) {
        console.log(data);
        $scope.vm.contacts = data;
    });

    /**
     * address: "fds"
     description: "fds11111111"
     fullName: "fds"
     id: 29
     shortName: "dsf"
     type: "company"
     */


    $scope.vm.create = function() {
        if ($scope.vm.modalTab == 0) {
            var dataModal = angular.copy($scope.vm.company);
            CompanyFactory.save(dataModal, function (data) {
                dataModal.id = data.id;
                dataModal.type = 'company';
                $scope.vm.contacts.push(dataModal);
            });

            $scope.vm.company = {};
        }

    };

    $scope.vm.update = function() {
        if ($scope.vm.modalTab == 0) {
            CompanyFactory.update($scope.vm.company, function () {
                $scope.vm.contacts[$scope.vm.index] = angular.copy($scope.vm.company);
            });
        }
    };

    $scope.vm.remove = function(contact) {
        ContactFactory.remove({id: contact.id}, function () {
            var index = $scope.vm.contacts.indexOf(contact);
            $scope.vm.contacts.splice(index, 1);
            contact = undefined;
        });
    };



});
