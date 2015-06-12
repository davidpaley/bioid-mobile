angular.module('bioid-mobile.enroll.controller', [])
  .controller('EnrollCtrl', function ($scope,$mdDialog,$ionicPopup,$ionicLoading,EnrollService,$ionicModal) {
    this.data = {};
    this.data.emails = [''];

    $scope.EnrollSucces=false;
    var enrolForm = {
              Name   : "",
              LastName : "",
              Identification: "",
              BirthDay:""
          };
    $scope.show = function() {
            $ionicLoading.show({
              template: 'Enviando Datos...', duration: 5000
            });
          };
    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
  });
    $scope.newUser = function(form, ev,projectForm) {
      $scope.modal.show();
     };    
    $scope.hideModal=function () {
      $scope.modal.hide();
    } 
    
    
    
    
    
})