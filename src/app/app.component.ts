import { Component, OnInit } from '@angular/core';
import { Game } from './game/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // ui booleans
  showDebugMenu = false;
  showRootMenu = true;
  showGameMenu = false;

  game: Game;

  ngOnInit(){
    this.game = new Game();
  }
  
  clickNewGame(): void {
  	this.showRootMenu = false;
  	this.showGameMenu = true;
  }

  clickDebugMenu(): void {
    this.showRootMenu = false;
    this.showDebugMenu = true;
  }
}
