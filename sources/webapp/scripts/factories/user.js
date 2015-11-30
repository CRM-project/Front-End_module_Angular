
crm.factory('UserFactory', function($resource) {
    return $resource(crm.backendUrl + "user/user/:id", {}, {
        update: {method: 'PUT'}
    });
});
