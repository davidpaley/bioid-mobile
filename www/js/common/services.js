angular.module('bioid-mobile.services',
    [
        'bioid-mobile.login.service',
        'bioid-mobile.api.service'
        
    ])
//.constant('ApiEndpoint', {
//  url: 'https://apibioid.azurewebsites.net'
//});
.constant('ApiEndpoint', {
  url: 'http://localhost:8100/token',
  BaseUrlAPI: 'http://apibioid.azurewebsites.net'
});