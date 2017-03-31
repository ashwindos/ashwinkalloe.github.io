// File: chapter3/controllerSpec.js
describe('Filter: setTeamName', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var filter;
    var scope
        // Before each unit test, instantiate a new instance
        // of the controller
    beforeEach(inject(function($filter, $rootScope) {
        scope = $rootScope.$new();

        filter = $filter('setTeamName', { $scope: scope });
    }));

    it('should filter id one to  PSV', function() {
        var input = 0;
        var output = "PSV"
        expect(filter(input)).toBe(output);

    });


});