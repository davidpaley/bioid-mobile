/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
describe('EnrollCntrlTest', function () {
    var $httpBackend, scope, createController;

    beforeEach(module('bioid-mobile.enroll.controller'));

    beforeEach(inject(function ($injector, $rootScope, $controller) {

        $httpBackend = $injector.get('$httpBackend');
        //jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';

        scope = $rootScope.$new();
        //    $controller('EnrollCtrl', {'$scope': scope});
//        createController = function () {
//            return $controller('EnrollCtrl', {
//                '$scope': scope
//            });
//        };
        $controller('EnrollCtrl', {
      $scope: scope
    });


    }));

    it('should enroll a user', function () {
        //var controller = createController();
        $httpBackend.whenPOST('/empleados').respond(function (method, url, data) {
            return [200, {}];
        });
        //$httpBackend.flush();
        expect(scope.EnrollSucces).toBe(true);
    });
    it('should Show error', function () {
        //var controller = createController();
        $httpBackend.whenPOST('/empleados').respond(function (method, url, data) {
            return [500, {}];
        });
        scope.enrollUser();
        //$httpBackend.flush();
        expect(scope.EnrollSucces).toBe(false);
    });

});