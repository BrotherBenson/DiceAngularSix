import { Injectable } from '@angular/core';
import { Game, GameStatus } from '../shared/models/game';
import { LoginRequest } from './models/loginRequest';
import { LoginResponse } from './models/loginResponse';
import { SignupRequest } from './models/signupRequest';
import { SignupResponse } from './models/signupResponse';
import { Record } from '../shared/models/record';
import { Player } from '../shared/models/player';
import { User } from '../shared/models/user';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  USER_ARRAY : Array<User>;

  constructor() { 
    var USER_ARRAY = [
      new User(1, "Benson", "banana"),
      new User(2, "Andy", "apple"),
      new User(3, "Dadoose", "darts"),
      new User(4, "Lisa", "lamb"),
      new User(5, "Abby", "artist"),
      new User(6, "Wendy", "willow")
    ];
  }

  login(request: LoginRequest): LoginResponse {
    var lookupName = request.name;
    var lookupPassword = request.password;

    var user = _.first(this.USER_ARRAY, function(user){user.name == request.name});

    var response = new LoginResponse();

    if (user.password == lookupPassword){
      response.isValid = true;
    }

    return response;
  }

  createUser(request: SignupRequest): SignupResponse {
    var response = new SignupResponse();

    var matches = _.find(this.USER_ARRAY, function(user){user.name == request.name;})

    if (matches.length < 1){
      response.isValid = true;
    }

    return response;
  }

  getGamesByStatus(status: GameStatus): Array<Game> {
    var results = [];
    return results;
  }

  getGames(user: User): Array<Game> {
    var gameOne = new Game();
    gameOne.players.push(
      new Player(this.getUser(2)));
    var gameTwo = new Game();
    gameTwo.players.push(
      new Player(this.getUser(3)));

    var results = [
      gameOne,
      gameTwo
    ];
    return results;
  }

  getRecord(user: User): Record {
    var record = new Record(32, 27);
    return record;
  }

  getOtherUsers(user: User): Array<User> {
    var users = this.getUsers();
    var results = _.filter(users, function(arrayUser){ return arrayUser.name != user.name; })
    return results;
  }

  getUser(id: number): User {
    var USER_ARRAY = this.getUsers();
    return _.find(USER_ARRAY, function(arrayUser){ return arrayUser.id == id; })
  }

  getUsers(): Array<User>{
    var results = _.sortBy(this.USER_ARRAY, function(user){ return user.name; });

    return results;
  }
}
