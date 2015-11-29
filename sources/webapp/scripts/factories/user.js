
crm.factory('user', ['$resourse', function($resourse) {
    return $resourse(app.backendUrl + "user/user/:id")
}]);