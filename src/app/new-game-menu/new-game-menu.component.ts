import { Component, Input } from '@angular/core';
import { Game } from '../models';
import { GameService } from '../game.service';

@Component({
  selector: 'app-new-game-menu',
  templateUrl: './new-game-menu.component.html',
  styleUrls: ['./new-game-menu.component.css']
})

export class NewGameMenuComponent {
  @Input() game: Game;

  showPlayerCountMenu = true;
  showStandardRulesMenu = false;
  constructor(private gameService: GameService) {
  }

  clickPlayerCount(numberOfPlayers: number): void {
    this.game.settings.numberOfPlayers = numberOfPlayers;

    this.showPlayerCountMenu = false;
    this.showStandardRulesMenu = true;
  }

  clickStandardRules(answer: boolean): void {
    this.showStandardRulesMenu = false;
    this.gameService.initializeGame(this.game);
  }
}