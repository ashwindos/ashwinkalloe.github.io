app.service('CompetitionService', function() {

    var savedCompetitions = JSON.parse(localStorage.getItem('competitions'));
    console.log(savedCompetitions)

    var competitions;

    if (savedCompetitions != undefined && savedCompetitions != null && savedCompetitions.length > 0) {
        competitions = savedCompetitions;
    } else {
        competitions = [{
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
        ];
        localStorage.setItem('competitions', JSON.stringify(competitions));

    }

    var uid = (savedCompetitions !== null) ? savedCompetitions.length : 2;


    this.addCompetition = function(Newcompetition) {
        console.log(savedCompetitions)

        if (Newcompetition.id == null) {
            Newcompetition.id = uid++;
            competitions.push(Newcompetition);
            localStorage.setItem('competitions', JSON.stringify(competitions));

        } else {
            for (i in competitions) {
                if (competitions[i].id == Newcompetition.id) {
                    competitions[i] = Newcompetition;
                    localStorage.setItem('competitions', JSON.stringify(competitions));
                }
            }
        }
    }

    this.getCompetition = function(id) {
        for (i in competitions) {
            if (competitions[i].id == id) {
                return competitions[i];
            }
        }
    }

    this.getCompetitionName = function(id) {
        for (i in competitions) {
            if (competitions[i].id == id) {
                return competitions[i].name;
            }
        }
    }
    this.deleteCompetition = function(id) {
        for (i in competitions) {
            if (competitions[i].id == id) {
                competitions.splice(i, 1);
                localStorage.setItem('competitions', JSON.stringify(competitions));


            }
        }
    }
    this.list = function() {
        return competitions;
    }

})