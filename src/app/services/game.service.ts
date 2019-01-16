import { Injectable } from '@angular/core';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';
import { Score } from '../shared/models/score';
import { Turn } from '../game-turn/turn';
import { User } from '../shared/models/user';
import { _ } from 'underscore';

@Injectable({
	providedIn: 'root'
})

// a service for turn management, player management, and game processing.
export class GameService {

	constructor() { }

	initializeGame(game: Game): void {
		var NAMES = ["Art", "Ben", "Cam", "Doc", "Edd", "Fay", "Gil", "Han", "Ian", "Jan", "Kip", "Lou", "Max", "Nas"];
		// create players
		for (var i = 0; i < game.settings.numberOfPlayers; i++){
			var players = [];
			var user = new User(i, NAMES[i], "bill")
			game.players.push(new Player(user));;
		}

		// create scores
		for (let player of game.players){
			game.scores.push(new Score(player));
		}
		game.isReady = true;
	}

	beginNextTurn(game: Game): Turn {
		var nextShooter = this.getNextShooter(game);
		var turn = new Turn(nextShooter);
		return turn;
	}

	getGame(id: number): Game {
		var game = new Game();
		var player1 = new Player(new User(1, "Benson", "benson"));
		var player2 = new Player(new User(2, "Andy", "password"));
		var score1 = new Score(player1);
		score1.total = 2300;
		var score2 = new Score(player2);
		score2.total = 2600;
		game.scores = [
			score1, score2
		];
		return game;
	}

	getNextShooter(game: Game): Player {
		var lastTurn = _.last(game.turns);
		var lastShooter = lastTurn.player;
		var index = game.players.indexOf(lastShooter);
		var lastPlayerPosition = game.players.length -1;

		if (index == lastPlayerPosition){
			return _.first(game.players);
		} else{
			return game.players[index+1];
		}
	}
}
