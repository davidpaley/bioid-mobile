angular.module('bioid-mobile.login.controller', [])

.controller('LoginController', function ($scope, $rootScope, $state, $ionicPopup, AuthService, $ionicLoading) {
    $scope.submit = function (user) {
        $ionicLoading.show({ template: '<i class="icon ion-loading-c"></i><br/>Cargando', noBackdrop: false });

        AuthService.login(user).then(function (result) {
            $ionicLoading.hide();
            if (!$scope.$$phase) {
                $scope.$apply();
            }
            $state.transitionTo("tab.more");
        }, function (error) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'ERROR DE LOGIN',
                template: 'Usuario y/o contraseña invalidos'
            });
            alertPopup.then(function (res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        });
    }
});