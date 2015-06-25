angular.module('bioid-mobile.api.service', [])

.factory('EnrollService', function (ApiEndpoint, $http, $q) {
    return {
        post: function (Action, Data) {
            return $http.post(ApiEndpoint.BaseUrlAPI + Action, Data, {
                headers: {
                    'Content-Type': "application/json; charset=utf-8",
                    'x-zumo-application':'zidCPzVtyrBCKtjSlEdPznLIaHfiSy54' //WebApiToken
                }
            });
        }

    }
});