/**
 * Created by mil on 07.10.2015.
 */

crm.controller('userController', function($scope, $resource) {

    var url = "http://localhost:8080/user/user/:id";

    $scope.vm = {};

    var User = $resource(url, {}, {
        update: {method: 'PUT'}
    });

    $scope.vm.users = User.query();


    /*


    $scope.vm.prepare = function (user) {
        $scope.vm.modalTitle = user ? 'Изменение профиля пользователя: ' + user.login : 'Новый профиль';
        $scope.vm.user = angular.copy(user) || {};
        $scope.vm.index = $scope.vm.users.indexOf(user);
    };

    $scope.vm.create = function() {
        User.save($scope.vm.user, function (data) {
            $scope.vm.user.id = data.id;
            $scope.vm.users.push($scope.vm.user);
            $scope.vm.prepare($scope.vm.user);
        });
    };

    $scope.vm.update = function() {
        User.update($scope.vm.user, function () {
            $scope.vm.users[$scope.vm.index] = angular.copy($scope.vm.user);
        });
    };

    $scope.vm.remove = function(user) {
        User.remove({id: user.id}, function () {
            var index = $scope.vm.users.indexOf(user);
            $scope.vm.users.splice(index, 1);
            user = undefined;
        });
    };*/

});