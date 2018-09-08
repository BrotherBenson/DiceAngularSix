import { Component, OnInit } from '@angular/core';
import { Game } from './shared/models/game';
import { User } from './shared/models/user';

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
  user: User;

  ngOnInit(){
    this.game = new Game();
    this.user = new User(1, "Ben");
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
