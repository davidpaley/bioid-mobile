
describe('EnrollCntrl', function(){
var $httpBackend, createController, scope, _EnrollService;

beforeEach(inject(function ( $httpBackend, $injector, $rootScope, $controller) {
    
    $httpBackend = $injector.get('$httpBackend');
    jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';



    scope = $rootScope.$new();
    $controller('EnrollCtrl', { '$scope': scope });

}));


it('should enroll a person', function() {
    $httpBackend.whenPOST('/empleados').respond(function (method, url, data) {
		return [200, {}];
	});
    $httpBackend.flush();
    expect(scope.EnrollSucces).toBe(true);
});
it('should Show error', function() {
    $httpBackend.whenPOST('/empleados').respond(function (method, url, data) {
		return [500, getJSONFixture('error.json'), {}];
	});
    EnrollCtrl.newUser();
    $httpBackend.flush();
    expect(scope.EnrollSucces).toBe(false);
});

});