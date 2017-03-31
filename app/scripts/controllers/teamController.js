app.controller('TeamController', function($scope, $routeParams, TeamService, $filter, CompetitionService) {
    $scope.pageName = 'Teams';
    $scope.teams = TeamService.list();
    $scope.team_id = $routeParams.t_id;
    $scope.newTeam = TeamService.getTeam($scope.team_id);
    $scope.comp = CompetitionService.list();
    console.log($scope.newTeam);

    $scope.saveTeam = function() {
        console.log($scope.newTeam);
        TeamService.addTeams($scope.newTeam);
        $scope.newTeam = {};
    }
    $scope.deleteTeam = function(team) {
        TeamService.deleteTeam(team.id);
    }
    $scope.updateTeam = function() {
        TeamService.addTeams($scope.newTeam);
        scope.newTeam = {};
    }
    $scope.testButton = function(id) {
        console.log(id);
    }

});