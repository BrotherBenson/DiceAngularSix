import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { Player } from '../shared/models/player';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent implements OnInit {
  @Input() player: Player;
  
  constructor() { }

  ngOnInit() {
  }
}
