import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-menu-root',
  templateUrl: './menu-root.component.html',
  styleUrls: ['./menu-root.component.css']
})
export class MenuRootComponent implements OnInit {

  constructor() { }

  showRootMenu = true;
  
  game: Game;
  user: User;

  ngOnInit(){
    this.game = new Game();
  }

  hideRootMenu(): void{
    this.showRootMenu = false;
  }
}
