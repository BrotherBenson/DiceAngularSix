import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  showGames: boolean;
  showNewGameMenu: boolean;
  showRootMenu: boolean;
  showRules: boolean;
  showSettings: boolean;
  showProfile: boolean;

  constructor() {
    this.showGames = false;
    this.showNewGameMenu = false;
    this.showRootMenu = true;
    this.showRules = true;
    this.showSettings = false;
    this.showProfile = false;
  }

  ngOnInit() {
  }

  clickBack(): void{
    this.hideAllMenus();
    this.showRootMenu = true;
  }

  clickGames(): void{
    this.hideRootMenu();
    this.showGames = true;
  }

  clickNewGame(): void{
    this.hideRootMenu();
    this.showNewGameMenu = true;
  }

  clickProfile(): void{
    this.hideRootMenu();
    this.showProfile = true;
  }

  clickRules(): void{
    this.hideRootMenu();
    this.showRules = true;
  }

  clickSettings(): void{
    this.hideRootMenu();
    this.showSettings = true;
  }

  hideAllMenus(): void{
    this.showGames = false;
    this.showNewGameMenu = false;
    this.showProfile = false;
    this.showRootMenu = false;
    this.showSettings = false;
  }

  hideRootMenu(): void{
    this.showRootMenu = false;
  }
}
