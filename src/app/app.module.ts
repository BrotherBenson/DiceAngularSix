// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { GameDiceFaceComponent } from './game-dice-face/game-dice-face.component';
import { GameTableComponent } from './game-table/game-table.component';
import { GameScoreboardComponent } from './game-scoreboard/game-scoreboard.component';
import { GameTurnComponent } from './game-turn/game-turn.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuGameComponent } from './menu-game/menu-game.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { MenuNewGameComponent } from './menu-new-game/menu-new-game.component';
import { MenuRootComponent } from './menu-root/menu-root.component';
import { MenuSignupComponent } from './menu-signup/menu-signup.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { PlayerGameComponent } from './player-game/player-game.component';
import { RulesComponent } from './rules/rules.component';
import { UserGamesComponent } from './user-games/user-games.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { GameDiceSelectorComponent } from './game-dice-selector/game-dice-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    GameScoreboardComponent,
    GameTableComponent,
    GameTurnComponent,
    MenuAdminComponent,
    MenuGameComponent,
    MenuLoginComponent,
    MenuNewGameComponent,
    MenuRootComponent,
    MenuSignupComponent,
    MenuUserComponent,
    MultiplayerComponent,
    PlayerGameComponent,
    RulesComponent,
    UserGamesComponent,
    UserProfileComponent,
    UserStatsComponent,
    GameDiceFaceComponent,
    GameDiceSelectorComponent
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
