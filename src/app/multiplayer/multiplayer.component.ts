import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';
import { Turn } from '../turn/turn';
import { User } from '../shared/models/user';
import { GameService } from '../services/game.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})

export class MultiplayerComponent implements OnInit {
  game: Game;
  turn: Turn;

  constructor(private gameService : GameService ) { 
    this.game = new Game();
  }

  ngOnInit() {
    this.initializeGame();
    this.turn = _.first(this.game.turns);
  }

  initializeGame(): void{
    var player1 = new Player(new User(1, "Benson"));
    var player2 = new Player(new User(2, "Andy"));
    this.game.isReady = true;
    this.game.players = [
      player1, player2
    ];
    this.game.turns.push(new Turn(player1));
  }

  endTurn(): void {
    this.gameService.endTurn(this.turn, this.game);
    this.turn = this.gameService.initializeNextTurn(this.game);
  }
}
