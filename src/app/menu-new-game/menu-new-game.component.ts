import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../shared/models/game';

@Component({
  selector: 'app-menu-new-game',
  templateUrl: './menu-new-game.component.html',
  styleUrls: ['./menu-new-game.component.css']
})
export class MenuNewGameComponent implements OnInit {
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
