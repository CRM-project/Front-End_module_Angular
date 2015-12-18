contact.factory('Company', function ($resource) {
    return $resource(contact.backendUrl + '/company/:id', {}, {
        update: {method: 'PUT'}
    });
});