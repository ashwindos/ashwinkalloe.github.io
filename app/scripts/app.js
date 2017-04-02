var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'

        })
        .when('/players', {
            templateUrl: 'views/players.html',
            controller: 'PlayerController'
        })
        .when('/players/add', {
            templateUrl: 'views/player-form.html',
            controller: 'PlayerController'
        })
        .when('/players/add/:p_id', {
            templateUrl: 'views/player-form.html',
            controller: 'PlayerController'
        })
        .when('/players/update', {
            templateUrl: 'views/players.html',
            controller: 'PlayerController'
        })
        .when('/players/delete', {
            templateUrl: 'views/players.html',
            controller: 'PlayerController'
        })
        .when('/competion', {
            templateUrl: 'views/competion.html',
            controller: 'CompetionController'
        })
        .when('/competion/add/:c_id', {
            templateUrl: 'views/competetion-form.html',
            controller: 'CompetionController'
        })
        .when('/competion/add/', {
            templateUrl: 'views/competetion-form.html',
            controller: 'CompetionController'
        })
        .when('/competion/update', {
            templateUrl: 'views/competion.html',
            controller: 'CompetionController'
        })
        .when('/competion/delete', {
            templateUrl: 'views/competion.html',
            controller: 'CompetionController'
        })
        .when('/teams', {
            templateUrl: 'views/teams.html',
            controller: 'TeamController'
        })
        .when('/teams/add', {
            templateUrl: 'views/team-form.html',
            controller: 'TeamController',
        })
        .when('/teams/add/:t_id', {
            templateUrl: 'views/team-form.html',
            controller: 'TeamController'
        })
        .when('/teams/update', {
            templateUrl: 'views/team-form.html',
            controller: 'TeamController'
        })
        .when('/teams/delete', {
            templateUrl: 'views/team-form.html',
            controller: 'TeamController'
        })
        .when('/games', {
            templateUrl: 'views/games.html',
            controller: 'GamesController'
        })
        .when('/games/add', {
            templateUrl: 'views/games-form.html',
            controller: 'GamesController'
        })
        .when('/games/add/:t_id', {
            templateUrl: 'views/games-form.html',
            controller: 'GamesController'
        })

    .otherwise({ redirectTo: '#/home' });
});