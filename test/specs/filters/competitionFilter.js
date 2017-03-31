// File: chapter3/controllerSpec.js
describe('Filter: setCompetitionName', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var filter;
    var scope
        // Before each unit test, instantiate a new instance
        // of the controller
    beforeEach(inject(function($filter, $rootScope) {
        scope = $rootScope.$new();

        filter = $filter('setCompetitionName', { $scope: scope });
    }));

    it('should filter id one to  PSV', function() {
        var input = 0;
        var output = "EREDIVISIE"
        expect(filter(input)).toBe(output);

    });


});