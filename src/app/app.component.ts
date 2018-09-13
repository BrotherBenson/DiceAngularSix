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
  showAdminMenu = false;
  showDebugMenu = false;
  showGameMenu = false;
  showLogin = false;
  showMultiplayer = false;
  showRootMenu = true;
  showSignup = false;
  showUserMenu = false;

  game: Game;
  user: User;

  ngOnInit(){
    this.game = new Game();
  }

  clickAdmin(): void { 
    this.hideRootMenu();
    this.showAdminMenu = true;
  }
  
  clickNewGame(): void {
  	this.hideRootMenu()
  	this.showGameMenu = true;
  }

  clickDebugMenu(): void {
    this.hideRootMenu()
    this.showDebugMenu = true;
  }

  clickLogin(): void {
    this.hideRootMenu();
    this.showLogin = true;
  }

  clickMultiplayer(): void{
    this.hideRootMenu()
    this.showMultiplayer = true;
  }

  clickSignup(): void{
    this.hideRootMenu();
    this.showSignup = true;
  }

  clickUserMenu(): void{
    this.hideRootMenu();
    this.showUserMenu = true;
  }

  hideRootMenu(): void{
    this.showRootMenu = false;
  }
}
