import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminInviteComponent } from './admin-invite/admin-invite.component';
import { GameTableComponent } from './game-table/game-table.component';
import { GameScoreboardComponent } from './game-scoreboard/game-scoreboard.component';
import { GameTurnComponent } from './game-turn/game-turn.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuGameComponent } from './menu-game/menu-game.component';
import { MenuNewGameComponent } from './menu-new-game/menu-new-game.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { UserGamesComponent } from './user-games/user-games.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuSignupComponent } from './menu-signup/menu-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScoreboardComponent,
    GameTableComponent,
    GameTurnComponent,
    MenuGameComponent,
    MenuNewGameComponent,
    MenuUserComponent,
    MultiplayerComponent,
    UserGamesComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserStatsComponent,
    MenuAdminComponent,
    AdminInviteComponent,
    MenuLoginComponent,
    MenuSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
