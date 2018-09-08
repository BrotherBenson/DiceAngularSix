import { Player } from './player';
import { Score } from './score';
import { Settings } from './settings';
import { Turn } from '../../turn/turn';

export class Game {
	isReady: boolean;
	players: Array<Player>;
	scores: Array<Score>;
	settings: Settings;
	status: GameStatus;
	turns: Array<Turn>;

	constructor() {
		this.isReady = false;
		this.players = [];
		this.scores = [];
		this.settings = new Settings();
		this.status = GameStatus.Active
		this.turns = [];
	}

	isFinished(): boolean {
		if (this.scores != null){
			for (let score of this.scores){
				if (score.total == 10000){
					return true;
				}
			}
			return false;
		}
	}
}

export enum GameStatus{
	Active = "ACTIVE",
	Complete = "COMPLETE"
}




