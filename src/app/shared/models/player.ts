import { User } from './user';

export class Player {
	user: User;
	inTheGame: boolean;

	constructor(user: User){
		this.user = user;
		this.inTheGame = false;
	}
}