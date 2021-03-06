import { Die, DieState } from '../shared/models/die';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';
import { Roll } from '../shared/models/roll';
import { GameService } from '../services/game.service';

export class Turn {
	dice: Array<Die>;
	game: Game;
	isFinished: boolean;
	player: Player;
	rolls: Array<Roll>;
	score: number;

	constructor(player: Player){
		this.dice = []
		this.isFinished = false;
		this.player = player;
		this.rolls = [];
		this.score = 0;

		this.initializeDice();
	}

	initializeDice(){
		for(var i = 0; i < 5; i++){
			var d = new Die(0);
			this.dice.push(d);
		}
	}

	openDice(): Array<Die>{
		var result = this.filterDice(DieState.Fresh);
		console.log('openDice', result);
		return result;
	}

	selectedDice(): Array<Die>{
		return this.filterDice(DieState.Selected);
	}

	setDice(): Array<Die>{
		return this.filterDice(DieState.Set);
	}

	filterDice(state: DieState){
		var results = [];
		for (let die of this.dice){
			if (die.state === state) {
				results.push(die);
			}
		}
		return results;
	}
}