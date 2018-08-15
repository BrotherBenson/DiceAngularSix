import { Player } from '../shared/models/player';
import { Score } from '../shared/models/score';
import { Settings } from '../shared/models/settings';
import { Turn } from '../turn/turn';

export class Game {
	isFinished: boolean;
	isReady: boolean;
	players: Array<Player>;
	scores: Array<Score>;
	settings: Settings;
	turns: Array<Turn>;

	constructor() { 
		this.isFinished = false;
		this.isReady = false;
		this.players = [];
		this.scores = [];
		this.settings = new Settings();
		this.turns = [];
	}
}