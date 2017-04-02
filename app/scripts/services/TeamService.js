app.service('TeamService', function() {

    var savedTeams = JSON.parse(localStorage.getItem('Teams'));
    console.log(savedTeams)

    var teams;

    if (savedTeams != undefined && savedTeams != null && savedTeams.length > 0) {
        teams = savedTeams;
    } else {
        teams = [{
                id: 0,
                name: 'PSV',
                home: 'Red-White-Red',
                away: "Navy-blue",
                competition: 0
            },
            {
                id: 1,
                name: 'Ajax',
                home: 'Red-White',
                away: "Blue",
                competition: 0
            }
        ];
        localStorage.setItem('teams', JSON.stringify(teams));

    }

    var uid = (savedTeams !== null) ? savedTeams.length : 2;


    this.addTeams = function(NewTeams) {
        console.log(savedTeams)

        if (NewTeams.id == null) {
            NewTeams.id = uid++;
            teams.push(NewTeams);
            localStorage.setItem('teams', JSON.stringify(teams));

        } else {
            for (i in teams) {
                if (teams[i].id == NewTeams.id) {
                    teams[i] = NewTeams;
                    localStorage.setItem('teams', JSON.stringify(teams));
                }
            }
        }
    }

    this.getTeam = function(id) {
        for (i in teams) {
            if (teams[i].id == id) {
                return teams[i];
            }
        }
    }
    this.deleteTeam = function(id) {
        for (i in teams) {
            if (teams[i].id == id) {
                teams.splice(i, 1);
                localStorage.setItem('teams', JSON.stringify(teams));


            }
        }
    }
    this.list = function() {
        return teams;
    }

})