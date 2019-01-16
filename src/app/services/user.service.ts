import { Injectable } from '@angular/core';
import { Game, GameStatus } from '../shared/models/game';
import { LoginRequest } from './models/loginRequest';
import { LoginResponse } from './models/loginResponse';
import { Player } from '../shared/models/player';
import { Record } from '../shared/models/record';
import { SignupRequest } from './models/signupRequest';
import { SignupResponse } from './models/signupResponse';
import { User } from '../shared/models/user';
import { _ } from 'underscore';
import { ForgotPasswordRequest } from './models/forgotPasswordRequest';
import { ForgotPasswordResponse } from './models/forgotPasswordResponse';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  USER_ARRAY : Array<User>;

  constructor() { 
    this.USER_ARRAY = [
      new User(1, "Benson", "banana"),
      new User(2, "Andy", "apple"),
      new User(3, "Dadoose", "darts"),
      new User(4, "Lisa", "lamb"),
      new User(5, "Abby", "artist"),
      new User(6, "Wendy", "willow")
    ];
  }

  createUser(request: SignupRequest): SignupResponse {
    var response = new SignupResponse();

    var matches = _.find(this.USER_ARRAY, function(user){user.name == request.name;})

    if (matches.length < 1){
      response.isValid = true;
    }

    return response;
  }

  forgotPassword(request: ForgotPasswordRequest): ForgotPasswordResponse {
    var response = new ForgotPasswordResponse();
    return response;
  }

  getGamesByStatus(status: GameStatus): Array<Game> {
    var results = [];
    return results;
  }

  getGames(user: User): Array<Game> {
    var gameOne = new Game();
    gameOne.players.push(
      new Player(this.getUserById(2)));
    var gameTwo = new Game();
    gameTwo.players.push(
      new Player(this.getUserById(3)));

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

  getUserByName(name: string): User{
    return _.find(this.USER_ARRAY, function(arrayUser){ return arrayUser.name == name; })
  }

  getUserById(id: number): User {
    return _.find(this.USER_ARRAY, function(arrayUser){ return arrayUser.id == id; })
  }

  getUsers(): Array<User>{
    var results = _.sortBy(this.USER_ARRAY, function(user){ return user.name; });

    return results;
  }

  login(request: LoginRequest): LoginResponse {
    console.log('login', request);
    var lookupName = request.name;
    var lookupPassword = request.password;

    var user = this.getUserByName(lookupName);

    console.log(user);
    var response = new LoginResponse();

    if (user.password == lookupPassword){
      response.isValid = true;
    }

    return response;
  }
}
