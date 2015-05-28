angular.module('bioid-mobile.verify.controller', [])
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