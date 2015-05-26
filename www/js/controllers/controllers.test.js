/// <reference path="../../typings/jasmine/jasmine.d.ts"/>

describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('bioid-mobile.controllers'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('AccountCtrl', {$scope: scope});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.settings.enableFriends).toEqual(true);
    });
});