/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
describe('AuthService Unit Tests', function () {
    var AuthService, $httpBackend;

    beforeEach(module('bioid-mobile.services'));

    beforeEach(inject(function (_AuthService_, $injector) {
        jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';
        AuthService = _AuthService_;
        $httpBackend = $injector.get('$httpBackend');
    }));


    it('can get an instance of my factory', inject(function (AuthService) {
        expect(AuthService).toBeDefined();
    }));

    it('return false if the user is not logged in', inject(function (AuthService) {
        expect(AuthService.isLoggedIn).toEqual(false);
    }));

    it('return a succesful login', inject(function (AuthService) {

        $httpBackend.when('POST', 'https://aaclupersoft2.azurewebsites.net/token').respond(function (method, url, data) {
            return [200,
                getJSONFixture('login.json'), {}];
        });

        AuthService.login({ username: "crearsrl", password: "crearsrl" });
        $httpBackend.flush();
        expect(AuthService.isLoggedIn).toEqual(true);
    }));
});