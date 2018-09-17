import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuRootComponent } from 'src/app/menu-root/menu-root.component';
import { MenuSignupComponent } from './menu-signup/menu-signup.component'; 
import { MenuUserComponent } from 'src/app/menu-user/menu-user.component';
import { MenuNewGameComponent } from 'src/app/menu-new-game/menu-new-game.component';
import { MultiplayerComponent } from 'src/app/multiplayer/multiplayer.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', component: MenuRootComponent },
  { path: 'admin', component: MenuAdminComponent },
  { path: 'login', component: MenuLoginComponent },
  { path: 'multiplayer', component: MultiplayerComponent }, 
  { path: 'newgame', component: MenuNewGameComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'signup', component: MenuSignupComponent },
  { path: 'usermenu', component: MenuUserComponent }
]

@NgModule({
  exports: [ RouterModule ], 
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
