// File: chapter3/controllerSpec.js
describe('Controller: GamesController', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope
        // Before each unit test, instantiate a new instance
        // of the controller
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('GamesController', { $scope: scope });
    }));

    it('should have game 0 on load', function() {
        expect(scope.games).toEqual([{
            id: 0,
            homeTeam: 0,
            awayTeam: 1,
            goalsHome: 0,
            goalsAway: 0,
            status: 'Not played'
        }]);
    });

    it('should status of the game with id one', function() {
        var game = scope.games[0];
        scope.Playgame(game);

        expect(scope.games[0].status).toEqual('Played');
    });

});