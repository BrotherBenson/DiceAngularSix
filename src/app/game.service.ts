import { Injectable } from '@angular/core';
import { Game, Player, Score, Turn } from './models';

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
		console.log(game);
	}

	endTurn(): void {
		console.log("it's all over");
	}

	startNextTurn(): void {
		console.log("next");
	}
}