// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { AdminInviteComponent } from './admin-invite/admin-invite.component';
import { GameDiceFaceComponent } from './game-dice-face/game-dice-face.component';
import { GameTableComponent } from './game-table/game-table.component';
import { GameScoreboardComponent } from './game-scoreboard/game-scoreboard.component';
import { GameTurnComponent } from './game-turn/game-turn.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuGameComponent } from './menu-game/menu-game.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuNewGameComponent } from './menu-new-game/menu-new-game.component';
import { MenuSignupComponent } from './menu-signup/menu-signup.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { UserGamesComponent } from './user-games/user-games.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

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
    MenuSignupComponent,
    GameDiceFaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
