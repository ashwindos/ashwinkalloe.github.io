app.service('PlayerService', function() {

    var savedplayers = JSON.parse(localStorage.getItem('players'));
    console.log(savedplayers)

    var players;

    if (savedplayers != undefined && savedplayers != null && savedplayers.length > 0) {
        players = savedplayers;
    } else {
        players = [{
                id: 0,
                name: 'Jetro Willems',
                posisition: 'Left-back',
                foot: "Left",
                team: 0
            },
            {
                id: 1,
                name: 'Marcelo',
                posisition: 'Left-back',
                foot: "Left",
                team: 0
            }
        ];
        localStorage.setItem('players', JSON.stringify(players));

    }

    var uid = (savedplayers !== null) ? savedplayers.length - 1 : 1;


    this.addPlayers = function(NewPlayers) {
        console.log(savedplayers)

        if (NewPlayers.id == null) {
            NewPlayers.id = uid++;
            players.push(NewPlayers);
            localStorage.setItem('players', JSON.stringify(players));

        } else {
            for (i in players) {
                if (players[i].id == NewPlayers.id) {
                    players[i] = NewPlayers;
                    localStorage.setItem('players', JSON.stringify(players));
                }
            }
        }
    }

    this.getPlayer = function(id) {
        for (i in players) {
            if (players[i].id == id) {
                return players[i];
            }
        }
    }
    this.deletePlayer = function(id) {
        for (i in players) {
            if (players[i].id == id) {
                players.splice(i, 1);
                localStorage.setItem('players', JSON.stringify(players));


            }
        }
    }
    this.list = function() {
        return players;
    }

})