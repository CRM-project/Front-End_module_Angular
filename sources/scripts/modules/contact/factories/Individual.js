contact.factory('Individual', function ($resource) {
    return $resource(contact.backendUrl + '/individual/:id', {}, {
        update: {method: 'PUT'}
    });
});