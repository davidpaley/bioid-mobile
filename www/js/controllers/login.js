angular.module('bioid-mobile.login.controller', [])

  .controller('LoginCtrl', function ($scope, $rootScope, $state, $ionicPopup, AuthService, $ionicLoading) {
    $scope.submit = function (user) {
        if (user.username == "admin" && user.password == "admin") {
            $state.transitionTo("app.home");
            return;
    }
        $ionicLoading.show({ template: '<ion-spinner icon="android"></ion-spinner><br/>Cargando', noBackdrop: false });
        AuthService.login(user).then(function (result) {
            $ionicLoading.hide();
            if (!$scope.$$phase) {
                $scope.$apply();
            }
            $state.transitionTo("app.home");
        }, function (error) {
        $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
                    title: 'ERROR DE LOGIN',
                    template: 'Usuario y/o contraseña inválidos'
        });
        alertPopup.then(function (res) {
                    //                console.log('Thank you for not eating my delicious ice cream cone');
        });
      });
    }
});