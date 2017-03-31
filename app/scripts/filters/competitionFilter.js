app.filter('setCompetitionName', function(CompetitionService) {

    return function(item) {
        var comp = CompetitionService.getCompetition(item);
        compName = comp.name;
        return compName.toUpperCase();
    };
});