angular.module('bioid-mobile.enroll.controller', [])
  .controller('EnrollCtrl', function ($scope,$mdDialog,$ionicPopup,$ionicLoading,EnrollService) {
    this.data = {};
    this.data.emails = [''];
    $scope.EnrollSucces=false;
    //$scope.projectForm.$setPristine();  //no me reconoce projectForm
    $scope.show = function() {
            $ionicLoading.show({
              template: 'Enviando Datos...', duration: 5000
            });
          };
    $scope.newUser = function(form, ev) {
      
      var confirmPopup = $ionicPopup.confirm({
       title: 'Ingrese su huella',
       template: '<i class="icon ion-android-hand positive"></i>',
      });
      confirmPopup.then(function(res) {
       
       if(res) {
         $scope.show();
         EnrollService.post('/empleados',form);
         
         form.Name="";
         form.LastName="";
         form.Identification="";
         form.BirthDay="";
         form.$setPristine();
       } else {
         console.log('You are not sure');
         
       }
     });
     //tambien se puede usar un modal
      // var myPopup = $ionicPopup.show({
      //   template: '<i class="icon ion-android-hand positive"></i>',
      //   title: 'Ingrese su huella',  
      //   scope: $scope,
      //   buttons: [{ text: 'Cancelar', type:'button-positive' },{ text: 'Ok', type:'button-positive' } //poniendo en un boton OnTap
      //   ]
      //  });
      //  myPopup.then(function(res) {
      //     if (res){
      //       console.log('Putin!', res);
      //     }else{
      //       console.log('No Putin!', res);
      //     }
      //     
      //     
      //  });
     };    
    
    
    
    
    
})