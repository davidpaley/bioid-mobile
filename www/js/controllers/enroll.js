angular.module('bioid-mobile.enroll.controller', [])
  .controller('EnrollCtrl', function ($scope,$mdDialog,$ionicPopup) {
    this.data = {};
    this.data.emails = [''];
    $scope.EnrollSucces=false;
    $scope.enrollUser=function (){
      
    }
    $scope.newUser = function(form, ev) {
      
      var myPopup = $ionicPopup.show({
     template: '<i class="icon ion-android-hand positive"></i>',
     title: 'Ingrese su huella',
     scope: $scope,
     buttons: [{ text: 'Cancelar', type:'button-positive' },
       // {
        //  text: '<b>Cancelar</b>',
        //  type: 'button-positive',
        //  onTap: function(e) {
        //    if (!$scope.data.wifi) {
        //      //don't allow the user to close unless he enters wifi password
        //      e.preventDefault();
        //    } else {
        //      return $scope.data.wifi;
        //    }
        //  }
       // },
     ]
   });
  //  margin: 0 auto;
  // overflow: hidden;
      
      // $mdDialog.show({
      //     controller: ErrorController,
      //     templateUrl: '/templates/verify.dialog.html',
      //     clickOutsideToClose: false
      //   });
    }    
    function ErrorController($scope, $mdDialog) {
      $scope.content = 'Ingrese su huella';
      $scope.progress = 30;

      $scope.hide = function() {
         
        $mdDialog.hide();
      };
    }
    
    
    
    
})