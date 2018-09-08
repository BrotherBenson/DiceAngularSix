import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuGameComponent } from './menu-game/menu-game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { TableComponent } from './table/table.component';
import { TurnComponent } from './turn/turn.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserGamesComponent } from './user-games/user-games.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGameComponent,
    ScoreboardComponent,
    TableComponent,
    TurnComponent,
    MultiplayerComponent,
    MenuUserComponent,
    UserStatsComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserGamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
