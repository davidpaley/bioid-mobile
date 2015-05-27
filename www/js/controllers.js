angular.module('bioid-mobile.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function () {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeLogin();
    }, 1000);
  };
})

  .controller('VerifyCtrl', function ($scope) {
  $scope.tiles = [{
    markId: '1',
    color: 'green',
    size: 'icon',
    row: 2,
    col: 2,
    title: 'Entrada'
		}, {
      markId: '3',
      color: 'blue',
      size: 'icon-sm',
      row: 1,
      col: 2,
      title: 'Almuerzo'
    }, {
      markId: '2',
      color: 'red',
      size: 'icon',
      row: 2,
      col: 2,
      title: 'Salida'
    }, {
      markId: '4',
      color: 'red-lunch',
      size: 'icon-sm',
      row: 1,
      col: 2,
      title: 'Salida Almuerzo'
    }];
})

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
});
