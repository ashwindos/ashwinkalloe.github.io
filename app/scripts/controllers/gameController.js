app.controller('GamesController', function($scope, $routeParams, GameService, TeamService) {
    $scope.pageName = 'Games';
    $scope.games = GameService.list();
    $scope.game_id = $routeParams.c_id;
    $scope.newgames = GameService.getGame($scope.game_id);
    $scope.teams = TeamService.list();
    console.log($scope.newgames);

    $scope.savegames = function() {
        GameService.addgames($scope.newgames);
        $scope.newgames = {};
    }
    $scope.deletegames = function(newgames) {
        GameService.deleteGame(newgames.id);
    }
    $scope.updategames = function() {
        GameService.addgames($scope.newgames);
        $scope.newgames = {};
    }
    $scope.Playgame = function(newgames) {
        GameService.playGame(newgames);
        $scope.newgames = {};
    }
    $scope.testButton = function(id) {
        console.log(id);
    }

});