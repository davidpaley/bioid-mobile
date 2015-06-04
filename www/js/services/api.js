angular.module('bioid-mobile.api.service', [])

.factory('EnrollService', function (ApiEndpoint, $http, $q) {
    var isLoggedIn = localStorage["token"] != null;

    return {
        isLoggedIn : isLoggedIn,
        
        login: function (user) {
            var deferred = $q.defer();
            user.grant_type = "password";
            var header = { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" }
            var encodedData = "username=" + user.username + "&password=" + user.password + "&grant_type=" + user.grant_type;
            $http({
                url: ApiEndpoint.url+'/token',
                method: 'POST',
                headers: header,
                data: encodedData,
            })
                .success(function (data) {
                    localStorage["token"] = data.access_token;
                    localStorage["UserId"] = data.userId;
                deferred.resolve();
            })
               .error(deferred.reject);
            return deferred.promise;
        }

    }
});