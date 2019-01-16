import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminInviteComponent } from './admin-invite/admin-invite.component';
import { GameTableComponent } from './game-table/game-table.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuSignupComponent } from './menu-signup/menu-signup.component';
import { UserGamesComponent } from './user-games/user-games.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'admin/invite', component: AdminInviteComponent },
  { path: 'admin', component: MenuAdminComponent },
  { path: 'game/:id', component: GameTableComponent },
  { path: 'login', component: MenuLoginComponent },
  { path: 'signup', component: MenuSignupComponent },
  { path: 'user/:id/games', component: UserGamesComponent },
  { path: 'user/:id/profile', component: UserProfileComponent },
  { path: 'user/:id/settings', component: UserSettingsComponent },
  { path: 'user/:id/stats', component: UserStatsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}
