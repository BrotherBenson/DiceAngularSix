import { Component, OnInit } from '@angular/core';
import { Game } from '../game/game';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  game: Game;
  viewModel: DebugViewModel;

  constructor() { 
    this.viewModel = new DebugViewModel();
  }

  ngOnInit() {
    this.game = new Game();
    this.viewModel = new DebugViewModel();
  }

  toggleDebugMenu(): void { 
    this.viewModel.showDebugMenu = !this.viewModel.showDebugMenu;
  }
}

export class DebugViewModel{
  showDebugMenu: boolean;
  showGameMenu: boolean;

  constructor(){
    this.showDebugMenu = true;
    this.showGameMenu = false;
  }
}
