import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  showInviteMenu = false;
  showRootMenu = true;
  constructor() { }

  ngOnInit() {
  }

  clickInvite(): void {
    this.hideRootMenu();
    this.showInviteMenu = true;
  }

  hideRootMenu(): void{
    this.showRootMenu = false;
  }

}
