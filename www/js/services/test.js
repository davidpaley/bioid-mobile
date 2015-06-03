/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
describe('AuthService Unit Tests', function () {
    var AuthService;

    beforeEach(module('bioid-mobile.services'));
    
    beforeEach(function() {
        spyOn(foo, 'setBar');
    });
    
    beforeEach(inject(function (_AuthService_,$injector) {
        AuthService = _AuthService_;
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('POST', "/token").respond({});
        $httpBackend.flush();
    }));

    it('can get an instance of my factory', inject(function (AuthService) {
        expect(AuthService).toBeDefined();
    }));

    it('is not logged in', inject(function (AuthService) {
        expect(AuthService.isLoggedIn).toEqual(false);
    }));

    it('has Max as friend with id 1', inject(function (AuthService) {
        var oneFriend = {
            id: 1,
            name: 'Max Lynx',
            notes: 'Odd obsession with everything',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&amp;s=460'
        };

        expect(Friends.get(1).name).toEqual(oneFriend.name);
    }));
});