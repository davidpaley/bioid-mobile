angular.module('bioid-mobile.bluetooth.service', [])

.factory('BluetoothService', function (ApiEndpoint, $http, $q) {
    var isLoggedIn = localStorage["token"] != null;

    return {
        read : isLoggedIn,
        
        write: function (user) {
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