import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {
  showGames: boolean;
  showRootMenu: boolean;
  showSettings: boolean;
  showProfile: boolean;

  constructor() {
    this.showGames = false;
    this.showRootMenu = true;
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

  clickProfile(): void{
    this.hideRootMenu();
    this.showProfile = true;
  }

  clickSettings(): void{
    this.hideRootMenu();
    this.showSettings = true;
  }

  hideAllMenus(): void{
    this.showGames = false;
    this.showProfile = false;
    this.showRootMenu = false;
    this.showSettings = false;
  }

  hideRootMenu(): void{
    this.showRootMenu = false;
  }
}
