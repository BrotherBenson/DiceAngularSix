import { Injectable } from '@angular/core';
import { Game, GameStatus } from '../shared/models/game';;
import { Record } from '../shared/models/record';
import { User } from '../shared/models/user';
import { _ } from 'underscore';

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

  getOtherUsers(user: User): Array<User> {
    var users = this.getUsers();
    var results = _.filter(users, function(arrayUser){return arrayUser.name != user.name})
    return results;
  }

  getUsers(): Array<User>{
    var USER_ARRAY = [
      new User(1, "Benson"),
      new User(2, "Andy"),
      new User(3, "Dadoose"),
      new User(4, "Lisa"),
      new User(5, "Abby"),
      new User(6, "Wendy")
    ];

    var results = _.sortBy(USER_ARRAY, function(user){ return user.name; });

    return results;
  }
}
