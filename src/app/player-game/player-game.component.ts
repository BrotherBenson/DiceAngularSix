import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';
import { Turn } from '../game-turn/turn';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent implements OnInit {
  @Input() player: Player;
  @Input() turn: Turn;
  
  constructor() { }

  ngOnInit() {
  }
}
