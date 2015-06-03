angular.module('bioid-mobile.enroll.controller', [])
  .controller('EnrollCtrl', function ($scope) {
    this.data = {};
    this.data.emails = [''];
    var enrollSuccess;
    $scope.newUser = function(form, ev) { 
        enrollSuccess=false;
      }
})