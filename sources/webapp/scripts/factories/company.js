
crm.factory('CompanyFactory', function($resource) {
    return $resource(crm.backendUrl + "company/company/:id", {}, {
        update: {method: 'PUT'}
    });
});