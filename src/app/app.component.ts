import { Component, OnInit } from '@angular/core';
import { Game } from './shared/models/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // ui booleans
  showDebugMenu = false;
  showGameMenu = false;
  showMultiplayer = false;
  showRootMenu = true;
  showUserMenu = false;

  game: Game;

  ngOnInit(){
    this.game = new Game();
  }
  
  clickNewGame(): void {
  	this.hideRootMenu()
  	this.showGameMenu = true;
  }

  clickDebugMenu(): void {
    this.hideRootMenu()
    this.showDebugMenu = true;
  }

  clickMultiplayer(): void{
    this.hideRootMenu()
    this.showMultiplayer = true;
  }

  clickUserMenu(): void{
    this.hideRootMenu();
    this.showUserMenu = true;
  }

  hideRootMenu(): void{
    this.showRootMenu = false;
  }
}
