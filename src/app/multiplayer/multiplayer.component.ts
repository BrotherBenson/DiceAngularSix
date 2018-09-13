import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';
import { Turn } from '../turn/turn';
import { User } from '../shared/models/user';
import { GameService } from '../services/game.service';
import { TurnService } from '../services/turn.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})

export class MultiplayerComponent implements OnInit {
  game: Game;
  turn: Turn;
  player1: Player;
  player2: Player;

  constructor(private gameService : GameService, private turnService: TurnService ) { 
    this.game = new Game();
  }

  ngOnInit() {
    this.initializeGame();
    this.turn = _.first(this.game.turns);
  }

  initializeGame(): void{
    this.player1 = new Player(new User(1, "Benson", "jeff"));
    this.player2 = new Player(new User(2, "Andy", "jeff"));
    this.game.isReady = true;
    this.game.players = [
      this.player1, this.player2
    ];
    this.game.turns.push(new Turn(this.player1));
  }

  endTurn(): void {
    this.turnService.endTurn(this.turn, this.game);
    this.turn = this.gameService.beginNextTurn(this.game);
  }
}
