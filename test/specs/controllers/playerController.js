// File: chapter3/controllerSpec.js
describe('Controller: PlayerController', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope
        // Before each unit test, instantiate a new instance
        // of the controller
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('PlayerController', { $scope: scope });
    }));

    it('should have array size -1 after delete', function() {
        var temp = scope.players[0];
        scope.deletePlayer(temp);
        expect(scope.players.length).toBe(1);

    });

});