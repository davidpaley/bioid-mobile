/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
describe('AuthService Unit Tests', function () {
    var AuthService, $httpBackend;

    beforeEach(module('bioid-mobile.services'));

    beforeEach(inject(function (_AuthService_, $injector) {
        //        jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';
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
                {
                    "access_token": "XtS3z08IlUMMvK28o7VP8wVOHaBkN0PgUwnAUjCD-huRa2Dxy4xtRxalHdf5bx9wbP4JJxo8mN8RrOwvrryZeiR6y1WQoIa4mr5ncPQ_UKvUmTJNrTiMJ_wprM8LULl8PCa23PHpYq6xshvyfb9WfM5vV2o7MsVkxjJSdAjkNf54cu3Tsx8Pd9qVUG0TGKo3HSjE6tU8cxlh44wbMT1CeYWZfNm2srH_rkZsLd03GaD8EgBC77SII4UNoz9nrNzuMOV7z7RQnGaHg3vahxLMgeVkLZLjZYsYVmjc9Hm5AXgdFHYXOHBK1U0pxNUpz2vuZzKXJJ7kIWX7KIDW4v7obM8O4XFpq__VXP3BjAvkOH3BB8PE9FoRTW370glWKnGiJO4rR-gBeWQsMF9KUrwUFXqFUciM314gGiupO65aFI1-AHQwnPx2tgGZ2NsZjCDxryHW0U0jc4--jnchTl04rupu2DeFCzDJQjJv5nVEIqCG-0PSf9DFE8U1V94SZmYpoZ9GV8jbjMv9M4xNN3KJmw",
                    "token_type": "bearer",
                    "expires_in": 1209599,
                    "userName": "crearsrl",
                    ".issued": "Wed, 03 Jun 2015 18:22:52 GMT",
                    ".expires": "Wed, 17 Jun 2015 18:22:52 GMT"
                }, {}];
        });

        AuthService.login({ username: "crearsrl", password: "crearsrl" });
        $httpBackend.flush();
        expect(AuthService.isLoggedIn).toEqual(true);
    }));
});