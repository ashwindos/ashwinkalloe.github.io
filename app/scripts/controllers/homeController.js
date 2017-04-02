app.controller('HomeController', function($scope, $routeParams, GameService, TeamService, CompetitionService, PlayerService) {
    //load al instances
    $scope.games = GameService.list();
    $scope.teams = TeamService.list();
    $scope.comp = CompetitionService.list();
    $scope.player = PlayerService.list();


});