
crm.controller('UserController', function($scope, $http, user) {

    var vm = {};

    vm.users = user.query();
    console.log(vm.users);

    /*$http.get('http://localhost:8080/user/user/').success(function(responce) {
        console.log(responce);
        //$scope.vm.users = responce.data;
   });*/
});

