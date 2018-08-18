import { Component, Input, OnInit } from '@angular/core';
import { DebugViewModel } from '../debug/debug.component';

@Component({
  selector: 'app-menu-debug',
  templateUrl: './menu-debug.component.html',
  styleUrls: ['./menu-debug.component.css']
})
export class MenuDebugComponent implements OnInit {
  @Input() viewModel: DebugViewModel;

  constructor() { 
  }

  ngOnInit() {
  }

  clickFreshGame(): void{
    this.toggleDebugMenu();
    this.viewModel.showGameMenu = true;
  }

  toggleDebugMenu(): void { 
    this.viewModel.showDebugMenu = !this.viewModel.showDebugMenu;
  }
}
