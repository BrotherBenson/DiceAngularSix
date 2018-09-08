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

  showPlayerCountMenu = true;
  showStandardRulesMenu = false;
  
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    if (this.game == null || this.game == undefined){
      this.game = new Game();
    }
  }

  clickPlayerCount(numberOfPlayers: number): void{
    this.game.settings.numberOfPlayers = numberOfPlayers;

    this.showPlayerCountMenu = false;
    this.showStandardRulesMenu = true;
  }

  clickStandardRules(answer: boolean): void {
    this.showStandardRulesMenu = false;
    this.gameService.initializeGame(this.game);
  }
}