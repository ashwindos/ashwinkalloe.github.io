app.controller('PlayerController', function($scope, $routeParams, PlayerService, $filter, TeamService) {
    $scope.pageName = 'Player';
    $scope.players = PlayerService.list();
    $scope.player_id = $routeParams.p_id;
    $scope.newPlayer = PlayerService.getPlayer($scope.player_id);
    $scope.teams = TeamService.list();
    console.log($scope.newPlayer);

    $scope.savePlayer = function() {
        console.log($scope.newPlayer);

        PlayerService.addPlayers($scope.newPlayer);
        $scope.newPlayer = {};
    }
    $scope.deletePlayer = function(player) {
        PlayerService.deletePlayer(player.id);
    }
    $scope.updatePlayer = function() {
        PlayerService.addPlayer($scope.newPlayer);
        scope.newPlayer = {};
    }
    $scope.testButton = function(id) {
        console.log(id);
    }

});