///// <reference path="../../typings/jasmine/jasmine.d.ts"/>
//
//describe('Controllers', function () {
//    var scope;
//
//    // load the controller's module
//    beforeEach(module('bioid-mobile.controllers'));
//
//    beforeEach(inject(function ($rootScope, $controller) {
//        scope = $rootScope.$new();
//        $controller('AccountCtrl', { $scope: scope });
//    }));
//
//    // LOGIN
//    it('should log the user successfully', function () {
//        $controller('AccountCtrl', { $scope: scope });
//        $('AccountCtrl', { $scope: scope });
//        expect(scope.settings.enableFriends).toEqual(true);
//    });
//
//    it('should show the user login if the user is not logged in', function () {
//        expect(scope.settings.enableFriends).toEqual(true);
//    });
//
//    it('should show the verify screen if the user is logged in', function () {
//        expect(scope.settings.enableFriends).toEqual(true);
//    });
//    
//    //LOGIN ADMINISTRATOR
//    it('should ask for the admin password if the user try to enter to enrol', function () {
//        expect(scope.settings.enableFriends).toEqual(true);
//    });
//});