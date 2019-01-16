import { Component, Input, OnInit} from '@angular/core';
import { Game } from '../shared/models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-menu-game',
  templateUrl: './menu-game.component.html',
  styleUrls: ['./menu-game.component.css']
})

export class MenuGameComponent implements OnInit {
  @Input() game: Game;
  
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    if (this.game == null || this.game == undefined){
      this.game = new Game();
    }
  }
}