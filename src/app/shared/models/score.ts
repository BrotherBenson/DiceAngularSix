import { Player } from './player';

export class Score {
	total: number;
	player: Player;

	constructor(player: Player){
		this.player = player;
		this.total = 0;
	}
}