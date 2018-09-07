import { Injectable } from '@angular/core';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';
import { Score } from '../shared/models/score';
import { Turn } from '../turn/turn';
import { _ } from 'underscore';

@Injectable({
	providedIn: 'root'
})

// a service for turn management, player management, and game processing.
export class GameService {

	constructor() { }

	initializeGame(game: Game): void {
		// create players
		for (var i = 0; i < game.settings.numberOfPlayers; i++){
			var players = [];
			game.players.push(new Player(i + 1));
		}

		// create scores
		for (let player of game.players){
			game.scores.push(new Score(player));
		}
		game.isReady = true;
	}
	
	endTurn(turn: Turn, game: Game): void {
		turn.isFinished = true;
		game.turns.push(turn);
	}

	initializeNextTurn(game: Game): Turn {
		var nextShooter = this.getNextShooter(game);
		var turn = new Turn(nextShooter);
		return turn;
	}

	getNextShooter(game: Game): Player {
		var lastTurn = _.last(game.turns);
		var lastShooter = lastTurn.player;
		var index = game.players.indexOf(lastShooter);
		var lastPlayerPosition = game.players.length -1;

		var obj = {
			lastTurn: lastTurn, 
			lastShooter: lastShooter, 
			index: index, 
			lastPlayerPosition: lastPlayerPosition
		};

		console.log('getNextShooter()', obj);

		if (index == lastPlayerPosition){
			console.log('first');
			return _.first(game.players);
		} else{
			console.log('second');
			return game.players[index+1];
		}
	}
}
