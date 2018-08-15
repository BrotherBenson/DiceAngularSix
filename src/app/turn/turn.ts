import { Die, DieState } from '../shared/models/die';
import { Player } from '../shared/models/player';
import { Roll } from '../shared/models/roll';

export class Turn {
	dice: Array<Die>;
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
		return this.filterDice(DieState.Fresh);
	}

	selectedDice(): Array<Die>{
		return this.filterDice(DieState.Selected);
	}

	setDice(): Array<Die>{
		return this.filterDice(DieState.Set);
	}

	filterDice(state: DieState){
		var results = [];
		console.log(this.dice);
		for (let die of this.dice){
			if (die.state === state) {
				results.push(die);
			}
		}
		return results;
	}
}