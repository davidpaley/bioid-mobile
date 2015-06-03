angular.module('bioid-mobile.services',
    [
        'bioid-mobile.login.service',
    ])
	
.factory('BaseUrl', function () {
    return 'https://aaclupersoft2.azurewebsites.net';
})