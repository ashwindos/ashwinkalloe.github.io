app.filter('setTeamName', function(TeamService) {

    return function(item) {
        var team = TeamService.getTeam(item);
        teamName = team.name;
        return teamName.toUpperCase();
    };
});