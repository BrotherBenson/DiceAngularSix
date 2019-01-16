import { Player } from './player';
import { Score } from './score';
import { Settings } from './settings';
import { Turn } from '../../game-turn/turn';

export class Game {
	id: number;
	isReady: boolean;
	players: Array<Player>;
	scores: Array<Score>;
	settings: Settings;
	status: GameStatus;
	turns: Array<Turn>;

	constructor() {
		this.id = 331;
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




