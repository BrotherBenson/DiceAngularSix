import { Component, OnInit } from '@angular/core';
import { Game } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // ui booleans
  showRootMenu = true;
  showNewGameMenu = false;

  game: Game;

  ngOnInit(){
    this.game = new Game();
  }
  
  clickNewGame(): void {
  	this.showRootMenu = false;
  	this.showNewGameMenu = true;
  }
}
