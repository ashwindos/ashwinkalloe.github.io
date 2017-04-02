app.service('GameService', function() {

    var savedgames = JSON.parse(localStorage.getItem('games'));
    console.log(savedgames)

    var games;

    if (savedgames != undefined && savedgames != null && savedgames.length > 0) {
        games = savedgames;
    } else {
        games = [{
            id: 0,
            homeTeam: 0,
            awayTeam: 1,
            goalsHome: 0,
            goalsAway: 0,
            status: 'Not played'
        }];
        localStorage.setItem('games', JSON.stringify(games));

    }

    var uid = (savedgames !== null) ? savedgames.length : 1;


    this.addgames = function(Newgames) {
        console.log(savedgames)

        if (Newgames.id == null) {
            Newgames.id = uid++;
            Newgames.goalsHome = 0;
            Newgames.goalsAway = 0;
            Newgames.status = 'not Played'
            games.push(Newgames);
            localStorage.setItem('games', JSON.stringify(games));

        }
    }

    this.getGame = function(id) {
        for (i in games) {
            if (games[i].id == id) {
                return games[i];
            }
        }
    }
    this.deleteGame = function(id) {
        for (i in games) {
            if (games[i].id == id) {
                games.splice(i, 1);
                localStorage.setItem('games', JSON.stringify(games));


            }
        }
    }

    this.playGame = function(Newgames) {
        for (i in games) {
            if (games[i].id == Newgames.id) {

                Newgames.goalsHome = Math.floor((Math.random() * 6));
                Newgames.goalsAway = Math.floor((Math.random() * 5));
                Newgames.status = 'Played';

                games[i] = Newgames;
                localStorage.setItem('games', JSON.stringify(games));
            }
        }

    }

    this.list = function() {
        return games;
    }

})