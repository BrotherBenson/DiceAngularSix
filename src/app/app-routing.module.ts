import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
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
=======
import { GameTableComponent } from './game-table/game-table.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuRootComponent } from 'src/app/menu-root/menu-root.component';
import { MenuSignupComponent } from './menu-signup/menu-signup.component'; 
import { MenuUserComponent } from 'src/app/menu-user/menu-user.component';
import { MenuNewGameComponent } from 'src/app/menu-new-game/menu-new-game.component';
import { MultiplayerComponent } from 'src/app/multiplayer/multiplayer.component';
import { RulesComponent } from './rules/rules.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
import { UserGamesComponent } from 'src/app/user-games/user-games.component';

const routes: Routes = [
  { path: '', component: MenuRootComponent },
  { path: 'admin', component: MenuAdminComponent },
  { path: 'game/:id', component: GameTableComponent },
  { path: 'games', component: UserGamesComponent },
  { path: 'login', component: MenuLoginComponent },
  { path: 'multiplayer', component: MultiplayerComponent }, 
  { path: 'newgame', component: MenuNewGameComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'signup', component: MenuSignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'usermenu', component: MenuUserComponent }
]

@NgModule({
  exports: [ RouterModule ], 
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
>>>>>>> 8c131378fae302dfd3ea6b46cf14ddef56d8a111
