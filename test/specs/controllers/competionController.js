// File: chapter3/controllerSpec.js
describe('Controller: CompetionController', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope
        // Before each unit test, instantiate a new instance
        // of the controller
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('CompetionController', { $scope: scope });
    }));

    it('should have items available on load', function() {
        expect(scope.competions).not.toBe(null);
    });

    it('should have competion eredivisie & serie A on load', function() {
        expect(scope.competions).toEqual([{
                id: 0,
                name: 'Eredivisie',
                location: 'Netherlands',
                max: 18,
                min: 16
            },
            {
                id: 1,
                name: 'Serie A',
                location: 'Italy',
                max: 20,
                min: 18
            },
        ]);
    });
    it('should have updated Serie A to have 22 teams available on load', function() {
        var serieA = scope.competions[1];
        serieA.max = 22;
        scope.newCompetition = serieA;
        scope.saveCompetition(scope.newCompetition);

        expect(scope.competions[1].max).toBe(22);
    });

});