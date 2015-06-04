angular.module('bioid-mobile.services',
    [
        'bioid-mobile.login.service',
    ])
//.constant('ApiEndpoint', {
//  url: 'https://apibioid.azurewebsites.net'
//});
.constant('ApiEndpoint', {
  url: 'http://localhost:8100/token'
});