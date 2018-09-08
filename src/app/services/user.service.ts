import { Injectable } from '@angular/core';
import { Game, GameStatus } from '../shared/models/game';;
import { Record } from '../shared/models/record';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getGamesByStatus(status: GameStatus): Array<Game> {
    var results = [];
    return results;
  }

  getGames(user: User): Array<Game> {
    var results = [];
    return results;
  }

  getRecord(user: User): Record {
    var record = new Record(32, 27);
    return record;
  }
}
