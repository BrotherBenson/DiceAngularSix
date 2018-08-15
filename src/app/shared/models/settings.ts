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
