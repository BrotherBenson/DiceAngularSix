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

export class Score {
	total: number;
	player: Player;

	constructor(player: Player){
		this.player = player;
		this.total = 0;
	}
}

export class Settings {
	canBust: boolean;
	maxRounds: number;
	numberOfPlayers: number;
	targetScore: number;

	constructor() {
		this.canBust = true;
		this.maxRounds = null;
		this.numberOfPlayers = null;
		this.targetScore = 10000;
	}
}

export class Player {
	id: number;
	inTheGame: boolean;

	constructor(id: number){
		this.id = id;
		this.inTheGame = false;
	}
}

export class Roll {
	numberOfDice: number;
	outcome: Array<number>;
}

export class Turn {
	isFinished: boolean;
	player: Player;
	rolls: Array<Roll>;
	score: number;
}